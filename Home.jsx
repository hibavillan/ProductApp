import React from 'react'
import { Button, CardActions, CardContent, CardMedia, Grid, Typography, Card} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    var[pro,setPro] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res)
            setPro(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div style={{margin:"4%"}}>
    <Grid container spacing={2}>
 {pro.map((val,i)=>{
    return(
        <Grid item xs={12} md={4}> 
                <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
    image={val.image}
    title="Products"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {val.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {val.price}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Buy</Button>
    <Button size="small">Add to cart</Button>
  </CardActions>
</Card>
</Grid>
    )
 })}
</Grid>
</div>
  )
}

export default Home
