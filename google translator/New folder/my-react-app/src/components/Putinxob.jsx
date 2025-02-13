import { Box } from '@mui/material'
import React, { useState,useEffect }  from 'react'
import Languagedropdown from './Languagedropdown'
import RightTextArea from './RightTextArea';
import LeftTextArea from './LeftTextArea';


//custom debounce hook
function useDebounce(value,delay){
  const[debouncedValue,setDebouncedValue]=useState(value);

  useEffect(()=>{
    const handler=setTimeout(()=>{
               setDebouncedValue(value);
    },delay);
    return()=>{
      clearTimeout(handler);
    }
  },[value,delay]);
  return debouncedValue; 
}


function Putinxob() {
    const[translateFromLanguage, setTranslateFromLanguage] = useState("all")
    const[translateToLanguage,setTranslateToLanguage]=useState("hi");

    const[enteredText,setEnteredText]=useState("");
    const[fetchedText,setFetchedText]=useState("");
//Debounce enteredText
          const debouncedEnteredText=useDebounce(enteredText,2000);
          useEffect(()=>{
            if(debouncedEnteredText){
              fetch(`https://api.mymemory.translated.net/get?q=${debouncedEnteredText}!&langpair=${
              translateFromLanguage==="all"?"en":translateFromLanguage}|${translateToLanguage}
              `)
              .then((res)=>res.json())
              .then((data)=>{
                setFetchedText(data.responseData.translatedText); 
              })
              .catch((e)=>{console.log(e)})

            }
          },[debouncedEnteredText,translateFromLanguage,translateToLanguage])
  return (
    <Box  sx={{
      display:"flex",
      justifyContent:"center",
      flexDirection:{xs:"column",md:"row"} ,
      m:"1rem" 
    }}>
       <Box sx={{flex:1}}>
        <Languagedropdown
        currentLanguage={translateFromLanguage}
        setLanguage={setTranslateFromLanguage}
        languages={[
            {id:"all",label:"Detect Language"},
            {id:"en",label:"English"},
            {id:"hi",label:"Hindi"}
        ]}
            />
            <LeftTextArea  enteredText={enteredText} setEnteredText={setEnteredText}/>
       </Box >
       <Box sx={{flex:1}}> <Languagedropdown
        currentLanguage={translateToLanguage}
        setLanguage={setTranslateToLanguage}
        languages={[
            {id:"hi",label:"Hindi"},
            {id:"en",label:"English"},
            {id:"fr",label:"French"}
        ]}
            />
           <RightTextArea fetchedText={fetchedText} setFetchedText={setFetchedText}/> 
            </Box>
            {/* text area left and right */}
            
    </Box>
  )
}

export default Putinxob
