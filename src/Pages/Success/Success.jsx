import React from "react";
import Box from '@mui/material/Box';
import Header from "../../components/Header/header";
import { OneKPlusOutlined } from "@mui/icons-material";
import { Grid,Paper,Typography,Card,Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import image from '../Success/Orderplacedsuccessfully.png'


function Success(){

    return(

        <Box>
            <Header/>
            <Box sx={{display:'flex',flexDirection:'column',top: '375px',
                                    left: '506px',
                                    width: '40vw',
                                    height: '60vh',
                                    alignItems:'center'

            , position:'relative', left:500,top:100}}>
                <Box sx={{width:'100%',height:250}}>
                    <img src={image}/>
                </Box>
                <Box sx={{width:'50%',height:100,display:'flex',alignItems:'center'}}>
                hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                </Box>
                <Box sx={{width:'100%',height:'28%',border:'1px solid gray',
                position:'relative',top:50,display:'flex',flexDirection:'column'}}>
                    <Box sx={{width:'100%',height:'50%',border:'1px solid gray',display:'flex',}}>
                        <Box sx={{width:'33.3%',display:'flex',justifyContent:'center',alignItems:'center'}}>Email</Box>
                        <Box sx={{width:'33.3%',display:'flex',justifyContent:'center',alignItems:'center'}}>Phone number</Box>
                        <Box sx={{width:'33.3%',display:'flex',justifyContent:'center',alignItems:'center'}}>Address</Box>

                    </Box>
                    <Box sx={{display:'flex',width:'100%',height:'50%'}}>
                        <Box sx={{width:'33.3%',border:'1px solid grey'}}>basila@gmail.com</Box>
                        <Box sx={{width:'33.3%',border:'1px solid grey'}}>9447742415</Box>
                        <Box sx={{width:'33.3%',border:'1px solid grey'}}>dfdfdfdfdff</Box>
                </Box>
            </Box>
            </Box>
        </Box>
    )

}
export default Success