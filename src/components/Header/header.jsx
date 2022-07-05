import React from "react";
import '../Header/header.css'
import { Box, display } from "@mui/system";
import logo from "../Header/logo/education.png";
import { Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import {InputBase } from "@mui/material/InputBase";
//import SearchIcon from '@mui/Search';
import SearchIcon from '@mui/icons-material/Search';
import cart from '../Header/logo/cart.png';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InputAdornment from '@mui/material/InputAdornment';





function Header(){

    return(
        <Box sx={{background:"#A03037",
                 width:'100vw',
                 height:'8vh',
                 display:'flex',
                 flexDirection:'row',
                 justifyContent:'space-around',
                 position:'relative',
                 

                 }}>
                     <Box  sx={{width:150,
                            height:'100%',
                             display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            postion:'relative',
                            justifyContent:"space-around",
                            left:100}}>
                                <img src= {logo}/>
                                <h2 style={{ color:'white',font: 'normal normal normal 20px/26px Roboto'}} >Bookstore</h2>
                                
                            </Box>
                    <Box sx={{ width:'40%',
                    height:40,
                        
                    position:'relative',
                    
                    top:20,
                    justifyContent:'center',
                    display:'flex',
                    flexDirection:'row'}}>
                        <Paper
                                
                                sx={{ height:40,
                                     display: 'flex',
                                    justifyContent:'start',
                                     width: '100%',
                                    postion:'relative',
                                    alignItems:'center',
                                    top:150 }}
                                >
                                <SearchIcon/>
                                    
                               
                                </Paper>

                    

                    </Box>
                     <Box
                     sx={{
                         width:250,
                         height:'100%',
                         display:'flex',
                         flexDirection:'row'

                     }}>
                         <Box 
                         sx={{
                             width:'50%',
                             height:'100%',
                             background: '#A03037 0% 0% no-repeat padding-box',
                             opacity:1,
                             display:'flex',
                             justifyContent:'center',
                             flexDirection:'column',
                             alignItems:'center'
                             
                         }}
                         >
                         <Box sx={{ width:'100%',
                        height:'70%',
                       
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'end',
                        color:'white'}}>
                            <PermIdentityIcon/>

                         </Box>
                         <Box sx={{width:'100%',
                        height:'30%'
                        }}>
                          <p
                            style={{
                                color:'white',font: 'normal normal normal 18px/15px Roboto',position:"relative",
                                bottom:15
                            }}
                         >Profile</p>
                         </Box>
                         </Box>
                         <Box
                         sx={{
                            width:'50%',
                            height:'100%',
                            background: '#A03037 0% 0% no-repeat padding-box',
                            opacity:1,
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center'
                            
                        }}
                         >
                             <Box sx={{ width:'100%',
                            height:'70%',
                        
                            color:'white',
                            display:'flex',
                            alignItems:'end',
                            justifyContent:'center'}} >
                               < ShoppingCartCheckoutIcon/>

                             </Box>
                             <Box sx={{width:'100%',
                            height:'30%',
                          }}>
                              <p
                                style={{
                                    color:'white',font: 'normal normal normal 18px/15px Roboto',position:"relative",
                                    bottom:15
                                }}
                             >Cart</p>
                             </Box>
                         </Box>

                     </Box>

        </Box>


    )




}

export default Header