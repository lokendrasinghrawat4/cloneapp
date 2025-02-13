import { Box,IconButton, Typography } from '@mui/material';
import React, { useState ,useRef, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
function LeftTextArea({enteredText,setEnteredText}) {
  const textareaRef=useRef();

  useEffect(() => {
    const resizeTextarea = () => {
      textareaRef.current.style.height="auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    };
    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", resizeTextarea, false);
      return () => {
        textareaRef.current.removeEventListener("input", resizeTextarea, false);
      };
    }
  }, []);
  
  const[charCount, setCharCount]=useState(0);
  const[keyboardOpen,setKeyboardOpen]=useState(false);
  const handleInputChange=(e)=>{
            if(e.target.value.length<=400){
              setEnteredText(e.target.value);
              setCharCount(e.target.value.length);
            }
     }
     const clearTextArea=()=>{
     if(textareaRef.current){
           textareaRef.current.value="";
           textareaRef.current.style.height="auto";
         }
     }
     const toggleKeyboard=()=>{
      setKeyboardOpen(!keyboardOpen);
     }
     const handleChange=(input)=>{
             setEnteredText(input);
             console.log(input);
     }
     const handleKeyPress=(button)=>{
   console.log(button);
     }
  return (
  <Box>  
      <Box sx={{border:1,
            borderColor:"divider",
            width:"98%",
            minHeight:"150px",
            borderRadius:2,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"}}>
                 <Box className='input container' sx={{display:"flex"}}>
                        <textarea 
                         value={enteredText}
                         ref={textareaRef}
                         style={{marginRight:"5%",
                           border:"none",
                           outline:"none",
                           padding:"10px",
                           fontSize:"20px",
                           width:"90%",
                           resize: 'none',
                         }}
                         className='dynamic-textarea'
                         id="myInput"
                        onChange={handleInputChange}
                        >
                         
                        </textarea>   
                        <CloseIcon  
                        sx={{color:"gray",m:"5px"}}
                        onClick={clearTextArea}
                        />
                 </Box>
                 <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    
                    <Box> 
                       <IconButton>
                             <MicIcon sx={{color:"gray"}}/>

                      </IconButton>
                      {charCount>0?(
                        <IconButton>
                          <VolumeUpIcon  sx={{color:"gray"}}/>
                        </IconButton>
                      ):" "}
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                        <Typography component="span" sx={{
                          color:"gray",fontSize:"12px",mr:"0.5rem"}}
                           >
                          {charCount}/400
                        </Typography>
                        <KeyboardIcon 
                        sx={{mr:"1rem",color:"gray"}}
                        onClick={toggleKeyboard}
                        />
                      </Box>
                 </Box>
        </Box>
        {keyboardOpen ?(
          <Keyboard onChange={handleChange} onKeyPress={handleKeyPress}/>
        ):("")}
    </Box>
  )
}

export default LeftTextArea
