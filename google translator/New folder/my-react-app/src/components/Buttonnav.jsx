import { Box, Button } from '@mui/material'
import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LanguageIcon from "@mui/icons-material/Language";
function Buttonnav() {
    const buttonStyle={
        textTransform:"none",
        fontWeight:"bold",
        borderColor:"#e3e3e3",
        marginRight:"8px"
    }
  return (
  < Box sx={{margin:"1rem",
    paddingLeft:"20px",
  }}>
  <Button  sx={buttonStyle} variant="outlined" startIcon={<TranslateIcon/>}>Text</Button>
  <Button sx={buttonStyle} variant="outlined" startIcon={<ImageIcon/>}>Image</Button>
  <Button sx={buttonStyle} variant="outlined" startIcon={<InsertDriveFileIcon/>}>Document</Button>
  <Button  sx={buttonStyle} variant="outlined" startIcon={<SpaceDashboardIcon/>}>Website</Button>
  <Button  sx={buttonStyle} variant="outlined" startIcon={<LanguageIcon/>}>Corporate Jargons</Button>
  
  </Box>
  )
}

export default Buttonnav
