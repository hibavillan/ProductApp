import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ProductApp
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}} >Home</Link></Button>
          <Button><Link to={'/T'} style={{textDecoration:'none',color:'white'}} >Add Product</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
