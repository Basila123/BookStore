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

import {getCart} from '../../Services/dataservice'
import { OneKPlusOutlined } from "@mui/icons-material";
import '../Cartlist/Cartlist.css'
import image from '../Books/images/book.png'
import AddressDetails from "../AdressDetails/AdressDetails";
import { MicNoneOutlined } from "@mui/icons-material";


function Wish(props){

    
    
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
                                                
                                                    
                                            </Box>

                            
                                
                            </CardContent>

                    </Box>
                   
                        
                

                </Box>
                
        
      
            </Box>
    )
                }
export default Wish