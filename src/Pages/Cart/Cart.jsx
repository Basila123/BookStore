import React from "react";
import Box from '@mui/material/Box';
import Header from "../../components/Header/header";
import Cartlist from "../../components/Cartlist/Cartlist";
import {getCart} from '../../Services/dataservice'
import { OneKPlusOutlined } from "@mui/icons-material";
import { Grid,Paper,Typography,Card,Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import AddressDetails from "../../components/AdressDetails/AdressDetails";
import {order} from "../../Services/dataservice";
import Book from "../../components/Book/Book";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { TrendingUpRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom";





function Cart(){

    let history=useHistory()
    const [bookCart,setBookCart]=React.useState([])
    const [displayAddress, setDisplayAddress]=React.useState([true])
    const [orderdetail,setOrderDetails]=React.useState({orders:[]})
    const [displayOrder, setDisplayOrder]=React.useState(false)


    const listentoContinue=()=>{
        setDisplayOrder(true)
       // setDisplayAddress(true)
        

    }


    const customerDisplay=()=>{
        setDisplayAddress(false)

    }     
    const postOrder=()=>{
        console.log("hi")
        let ordersArray = bookCart.map(function(book) {
            let obj = {
                "product_id": book.product_id._id,
                "product_name": book.product_id.bookName,
                 "product_quantity": book.quantityToBuy,
                "product_price": book.product_id.discountPrice
            }
            return obj
        })
        setOrderDetails({...orderdetail,orders : ordersArray})
        
        console.log(orderdetail)
        order(orderdetail).then((response)=>{
            console.log(response)
            history.push("/success")

        }).catch((error)=>{
            console.log(error)
        })

    }                                            



    const postOrderDetails=()=>{
        console.log('kkkkkkk')
        
       
    }
    


    const getBooksFromCart=()=>{
        getCart().then((response)=>{
                
                setBookCart(response.data.result)
                console.log(response)
               
            }).catch((error)=>{
    
                console.log(error)
                
            })
    
        }
        React.useEffect(()=>{
            //console.log(getBook)
            getBooksFromCart()
            
        },[orderdetail])
    
    
    

        

    return(
        <Box sx={{
            width:'100vw',
            height:'400vh',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            
            
        }}>
            <Box>
                <Header/>
            </Box>
            <Box sx={{
                width:'70%',
                position:'relative',
                

            }}>
            
           { !displayAddress? null:
            <Paper sx={{
                 width:'100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
            
               
                
            }}>

<Box sx={{
                     display:'flex',
                     flexDirection:'row',
                     position:'relative',
                     top:30,
                     
                     width:'60%',
                     marginBottom:4,
                     
                 }}>
            <Typography  sx={{ position:'relative',
                    left:100,}}> My Cart</Typography>
            <Box  sx={{width:'50%',
                    height:'100%',
                   
                    
                    display:'flex',
                    flexDirection:'column'}}>

                        <Box sx={{ width: '60%',position:'relative',left:700
                        }}>
                            <FormControl sx={{width:'65%'}}>
                                <InputLabel id="demo-simple-select-label">location</InputLabel>
                                <Select
                                
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            </Box>
                           
                    </Box>
            </Box>
                <Box sx={{ display:'flex',
                            flexDirection:'column'}}>
                
                <Grid sx={{
                    width:'95%',
                    marginBottom:10,marginTop:5
                    
                }}>
                {
                    bookCart.map((book)=>(
                    <Cartlist book={book} getBooksFromCart={getBooksFromCart} />))
                }

                
            </Grid>
            
               

            <Button sx={{
                width:150,
                postion:'relative',
                bottom:15,
                left:'50%',
                height:50,
                border:'1px solid blue',
                background:'blue',
                color:'white'
            }} onClick={customerDisplay} >Place Order</Button>
        
            </Box>
        

            </Paper>}
            {
                displayAddress?

                     null
                      :
                      <Card sx={{width:'100%',height:400, position:'static',marginTop:10,marginBottom:2,top:'500px'}}>
                          <AddressDetails listentoContinue={listentoContinue}/>
                      </Card>
            }

                    

            {
                displayOrder?
                
                    <Box  sx={{
                        width:'100%',
                       display:'flex',
                       flexDirection:'column',
                       marginTop:2,
                      
                       
                   }}> <Typography sx={{fontSize:25}}>OrderSummary</Typography>
                          <Grid sx={{
                                width:'95%',
                                
                                
                            }}>
                            {
                                    bookCart.map((book)=>(
                                    <OrderSummary book={book} />))
                                }

                
                        </Grid>

                       
                        <Button sx={{background:'blue',color:'white',width:100,left:'50%',marginBottom:1}} onClick={postOrder}>Checkout</Button>
                        </Box>
                     
                      :
                      null
               
            }

            </Box>
            
            
        </Box>
        )
            
}


export default Cart