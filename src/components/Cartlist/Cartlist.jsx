 import React from "react";
import Box from '@mui/material/Box';
import Header from "../../components/Header/header";

import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';

import { Button, Card, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import {getCart,updatetBook,removeCartItem} from '../../Services/dataservice'
import { OneKPlusOutlined } from "@mui/icons-material";
import '../Cartlist/Cartlist.css'
import image from '../Books/images/book.png'
import AddressDetails from "../AdressDetails/AdressDetails";
import { MicNoneOutlined } from "@mui/icons-material";

function Cartlist(props){

    const [bookId, setBookId] = React.useState("")
    const [qntyToBuy, setQntyToBuy] = React.useState([])
    const [getCartId, setGetCartId] = React.useState([])

    //------------------increment- cart--------------------
    const add = () => {

        let obj = {
            //id:getCartId,
            quantityToBuy: props.book.quantityToBuy+1
            
        }
        console.log(obj)
        console.log(props.book.quantityToBuy)

        updatetBook(props.book._id, obj).then((response) => {
            props.getBooksFromCart()
            //return(obj)
            
            //return (response)
            console.log(response)

        }).catch((error) => {
            console.log(error)
        })


    }
//------------------------------------decrement cart-------------------------------

    const sub = () => {

        let obj = {
            quantityToBuy: props.book.quantityToBuy-1
        }

        updatetBook(bookId, obj).then((response) => {
            props.getBooksFromCart()
           
            return (response)

        }).catch((error) => {
            console.log(error)
        })



    }


    const deleteItem=()=>{
        removeCartItem(props.book._id).then((response) => {
            props.getBooksFromCart()
           
            return (response)

        }).catch((error) => {
            console.log(error)
        })


    }


//--------------------getting from cart----------------------------
    // const getBookFromCart = () => {
    //     // aim is to check the number of occurance of particular book
    //     getCart().then((response) => {
    //         let filter = response.data.result.filter(function (cartbook) {
    //             if (props.currentBook._id === cartbook.product_id._id) {
    //                 setBookId(cartbook._id)
    //                 setQntyToBuy(cartbook.quantityToBuy)

    //                 return cartbook
    //             }
    //         })
    //         //setCartitemsid(response.data.result[0]._id); getCartId
    //         setGetCartId(filter)
    //     })
    //         .catch((error) => {

    //             console.log(error)

    //         })
    //     }



    
return(
<Box className="body">
                <Box sx={{
                   
                    width:'100%',
                    height:60,
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'flex-start'
                }}>
                        <Box  sx={{width:'60%',
                    height:'100%',
        
                    display:'flex',
                    flexDirection:'column',alignItems:"flex-start"
                    }}>
                            
                            <CardContent sx={{width:'100%',height:'100%',display:'flex',
                                            justifyContent:'flex-start',}}> 
                                            <Box sx={{
                                                width:'20%',
                                                height:'80%',
                                               
                                            }}>
                                                <img src={image} style={{width:'50%',height:50}}/>
                                            </Box>
                                            <Box sx={{
                                                width:'50%',
                                                height:'100%',
                                               
                                                display:'flex',
                                                flexDirection:'column',
                                                justifyContent:"flex-start",
                                                alignItems:'flex-start'
                                            }}>
                                                <Typography sx={{fontSize:20,
                                                position:'relative',
                                                
                                                left:30
                                                }}>{props.book.product_id.bookName}</Typography>
                                                <Typography sx={{fontSize:10,
                                                position:'relative',
                                                
                                                left:30,color:'gray'
                                                }}>{props.book.product_id.author}</Typography>
                                                <Typography sx={{fontSize:20,
                                                position:'relative',
                                                
                                                left:30
                                                }}>Rs. {props.book.product_id.price}</Typography>
                                                <Box sx={{display:'flex',justifyContent:'space-around',marginBottom:2,
                                                    position:'relative',left:30}}>
                                                    <AddIcon sx={{background:'gray',borderRadius:'30px 30px 30px 30px'}} onClick={add} />
                                                    <Typography style={{ borderRadius: '30px 30px 30px 30px', width: 100 }}>{props.book.quantityToBuy}</Typography>
                                                         
                                                
                                                    <MinimizeIcon   sx={{background:'gray',borderRadius:'30px 30px 30px 30px',postion:'relative',
                                                bottom:100}} onClick={sub}/>
                                                <Button onClick={deleteItem}>Remove</Button>
                                                </Box>
                                                    
                                            </Box>

                            
                                
                            </CardContent>

                    </Box>
                   
                        
                

                </Box>
                
        
      
            </Box>
    )
                }
export default Cartlist