import { Box} from '@mui/material'
import React, {useRef, useEffect } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
function RightTextArea({fetchedText,setFetchedText}) {
  const textareaRef=useRef();
  const resizeTextarea = () => {
    textareaRef.current.style.height="auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", resizeTextarea, false);
      return () => {
        textareaRef.current.removeEventListener("input", resizeTextarea, false);
      };
    }
  }, []);

  useEffect(() => {
    if(textareaRef.current){
       resizeTextarea();
    }
  },[fetchedText]);
  
  return (
  <Box>  
      <Box sx={{border:1,
            borderColor:"divider",
            width:"98%",
            minHeight:"150px",
            borderRadius:2,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            backgroundColor:"#f5f5f5",
            }}>
                 <Box className='input container' sx={{display:"flex"}}>
                        <textarea 
                        disabled={true}
                         value={fetchedText}
                         ref={textareaRef}
                         style={{marginRight:"5%",
                           border:"none",
                           outline:"none",
                           padding:"10px",
                           fontSize:"20px",
                           width:"90%",
                           resize: 'none',
                            backgroundColor:"#f5f5f5"
                         }}
                         className='dynamic-textarea'
                         id="myInput"
                        >  
                        </textarea> 
                 </Box>
                 <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                   <Box sx={{marginBottom:"0.5rem",marginLeft:"0.7rem"}}>
                    <VolumeUpIcon sx={{color:"gray"}}/>
                    </Box>
                    <Box>
                    <ContentCopyIcon sx={{color:"gray",mr:"1rem"}}/>
                    <ThumbsUpDownOutlinedIcon sx={{color:"gray",mr:"1rem"}}/>
                    <ShareOutlinedIcon sx={{color:"gray",mr:"1rem"}}/>
                    </Box> 
                 </Box>
        </Box>

    </Box>
  )
}

export default RightTextArea
