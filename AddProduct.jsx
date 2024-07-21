import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

const AddProduct = () => {
  return (
    <div style={{marginLeft:"100px" , marginTop:"100px", marginRight:"100px" ,marginBottom:"100px"}}>
 <Typography color="primary" variant="h3" style={{textAlign:"center"}}>Add Product</Typography> 
 <br /><br />
 <TextField id="standard-basic" fullWidth color="info" label="Product Name" variant="filled" />
 <br /><br />
 <label htmlFor="">Upload Image : </label><br/><input type="file" /><br /><br />
 <TextField id="outlined-basic" fullWidth color="info" label="Price" variant="filled" />
 <br /><br />
 <TextField id="filled-basic" fullWidth color="info" label="Category" variant="filled" />
<br /><br />
<Button variant="contained" fullWidth color="success">Submit</Button>
    </div>
  )
}

export default AddProduct
