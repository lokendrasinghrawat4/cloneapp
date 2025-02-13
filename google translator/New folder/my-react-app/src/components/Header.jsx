import React from 'react'
import {Avatar, Box} from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../image/logo.png"
function Header() {
  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        flex:1,
        heigth:"4.5%",
        borderBottom:"1px solid rgba(0,0,0,0.12)",
        padding:2
    }}>
          <Box className="header__left" sx={{display:"flex",alignItems:"center"}}>
                <MenuIcon sx={{ml:"1rem",mr:"1.3rem",color:"gray"}}/>
                <Box
                component="img"
                src={logo}
                alt="google translator image"
                sx={{width:"150px",height:"auto",display:{xs:"none",sm:"block"}}}
                />         
          </Box>
          <Box ClassName="header__right"  sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",mr:"1rem"}}>
             <AppsIcon sx={{color:"gray",mr:"1.2rem"}}/>
             <Avatar alt="Loki singh" src="/static/images/avatar/1.jpg"  sx={{width:"30px",height:"30px"}}/>
          </Box>
    </Box>
  )
}
export default Header
