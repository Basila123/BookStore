import React from "react";
import Cards from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import { PinDropSharp } from "@material-ui/icons";
import Home from "../../Pages/Home/Home";
import { Box } from "@mui/system";
import image from '../Books/images/book.png'
import { Button } from "@mui/material";
import { CardActions } from "@material-ui/core";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";
function Books(props){
    //console.log(props)
    //const [image,setImages]=React.useState([])
    

    const clickMe =(obj)=>{
  
      
      props.listenToBooks(obj)

      
      
    
    }

    let newbook={bookName: props.book.bookName, author:props.book.author,quantity:props.book.quantity,price: props.book.price,id:props.book._id}

    return(
        <Card sx={{ width: 250,height:350,marginLeft:2,marginBottom:4}} onClick={() =>clickMe(props.book)}>
         <Box sx={{width:'100%',height:'60%',backgroundColor:'gray'}}>
         < img src={image} style={{
           width:200,
           height:150,
           position:'relative',
           top:40
         }}/>

        </Box>      
      <CardContent sx={{display:'flex',
      flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'}}>
        <Typography variant="body2" color="text.secondary">
         { props.book.bookName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         { props.book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{background:"green"}}>
          {props.book.quantity}
          *
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.book.price}.Rs
        </Typography>
       
      </CardContent>
      
    </Card>
    )
}
export default Books