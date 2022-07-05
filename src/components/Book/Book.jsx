import React, { useState } from "react";
import { borderRadius, Box } from "@mui/system";
import image from '../Books/images/book.png'
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";
import { postCart, getCart } from '../../Services/dataservice'
import { Button, Rating, InputBase,Paper} from "@mui/material";
import { updatetBook,postWishlist,getWhishList } from '../../Services/dataservice'
import { useHistory } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
function Book(props) {
    let history=useHistory()
    const [cuurentCartItem, setCurrentItem] = React.useState({})
    const [filterArray, setFilterArray] = React.useState([])
    //gives all infmtn abt the book
    const [bookId, setBookId] = React.useState("")
    const [qntyToBuy, setQntyToBuy] = React.useState([])
    const [qntyToWish, setQntyToWish] = React.useState([])


    //
    const [getCartId, setGetCartId] = React.useState([])
    const [getWhishListId,setGetWishListId]=React.useState([])


    //let filterarray = data.fileter()
//------------------increment- cart--------------------
    const add = () => {

        let obj = {
            //id:getCartId,
            quantityToBuy: qntyToBuy + 1
        }

        updatetBook(bookId, obj).then((response) => {
            //return(obj)
            getBookFromCart()
            return (response)
            //console.log(response)

        }).catch((error) => {
            console.log(error)
        })


    }
//------------------------------------decrement cart-------------------------------

    const sub = () => {

        let obj = {
            quantityToBuy: qntyToBuy - 1
        }

        updatetBook(bookId, obj).then((response) => {
            getBookFromCart()
            return (response)

        }).catch((error) => {
            console.log(error)
        })



    }
//--------------------------adding to cart---------------------
    const addCart = () => {
        console.log(props.currentBook._id, props)
        postCart(props.currentBook._id).then((response) => {

            console.log(response)

        }).catch((error) => {
            console.log(error)
        })
    }

//--------------------getting from cart----------------------------
    const getBookFromCart = () => {
        // aim is to check the number of occurance of particular book
        getCart().then((response) => {
            let filter = response.data.result.filter(function (cartbook) {
                if (props.currentBook._id === cartbook.product_id._id) {
                    setBookId(cartbook._id)
                    setQntyToBuy(cartbook.quantityToBuy)

                    return cartbook
                }
            })
            //setCartitemsid(response.data.result[0]._id); getCartId
            setGetCartId(filter)
        })
            .catch((error) => {

                console.log(error)

            })
        }




//-------------------------------------------whish list-------------------------------------------//
const addWishList = () => {
    console.log(props.currentBook._id, props)
    postWishlist(props.currentBook._id).then((response) => {

        console.log(response)
        history.push("/wishlist")

    }).catch((error) => {
        console.log(error)
    })
}     

//----------------------------------get from whishlist--------------------------------------//
// 









    console.log(qntyToWish)
    console.log(getWhishListId)
    console.log(getCartId) //particular book Id
    console.log(bookId) //whole detail about book in the cart
    console.log(qntyToBuy)
    React.useEffect(() => {
        //console.log(getBook)
        getBookFromCart()

    }, [qntyToWish])
    React.useEffect(() => {
        //console.log(getBook)
        getBookFromCart()

    }, [qntyToBuy])
   


    return (
        <Box sx={{
            position: 'relative',
            top: 50,

            width: '90vw',
            height: '90vh',
            backgroundColor: 'white',

            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center', position: 'relative',
            

        }}>
            <Box sx={{
                width: '40%', height: '90%', position: "relative", display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'flex-start', top: 40,
                
            }}>
                <Box sx={{
                    width: '60%', height: '70%', position: "relative", display: 'flex', boxShadow: '2px 2px 2px 2px gray',
                    justifyContent: 'center', alignItems: 'center', bottom: 70
                }}>
                    <img src={image} style={{ width: '60%', height: '80%' }} />
                </Box>
                <Box sx={{ display: 'flex', width: '50%', height: '5%', flexDirection: 'row', justifyContent:'space-around', position: 'relative', bottom: '5%' }}>
                    {getCartId.length > 0 ?
                        <Box sx={{
                            width: '20%', background: 'white', display: 'flex', flexDirection: 'row',
                            justifyContent: 'space-around', 
                        }}>
                            <AddIcon style={{ borderRadius: '30px 30px 30px 30px', width: 40 ,background:'cream'}} onClick={add}></AddIcon>
                            <Typography style={{ borderRadius: '30px 30px 30px 30px', width: 40 }}>{qntyToBuy}</Typography>
                            <MinimizeIcon style={{postion:'relative',bottom:100,height:15,
                             width: 40 }} onClick={sub}></MinimizeIcon>

                        </Box>
                        :
                        <Button style={{ width: '20%', background: '#A03037' }} onClick={addCart}>cart</Button>
                    }

                    {
                       
                          <Button style={{ width: '22%', background: '#A03037' }} onClick={addWishList}>wishlist</Button>
                        
                    }
                    

                    

                </Box>


            </Box>


            <Paper sx={{
                width: '45%', height: '80%'
                , position: 'relative',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-start', marginBottom: 4,right:50
            }}>

                <Typography sx={{
                    width: '100%%', postion: 'relative',
                    height: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: ' , , , 10', top: 500, marginBottom: 4
                }}>
                    <Typography sx={{
                        fontSize: 40,
                        position: 'relative', marginTop: 3, left:50

                    }}>{props.currentBook.bookName}</Typography>
                    <Typography sx={{ color: 'gray', fontSize: 20, marginBottom: 1 ,position:'relative',left:50,}}>

                        
                        {props.currentBook.author}
                    </Typography>
                    <Typography sx={{ background: '#43a047', color: 'white', marginBottom: 1 ,left:50,position:'relative'}}>4.3 *</Typography>
                    <Typography sx={{ fontSize: 25,position:'relative',left:50 }}>{props.currentBook.price}</Typography>
                    <Typography sx={{
                    width: '100%%', 
                    height: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: ' , , , 10',marginTop:2,
                }}>  <b>DESCRIPTION</b>
                     {props.currentBook.description}
                    


                </Typography>


                </Typography>
                
                <Typography sx={{ width:'96%' ,marginLeft:2,display: 'flex', flexDirection: 'column',alignItems:"flex-start", justifyContent:'space-around',height: '30%', borderRadius: '10px',marginTop:6 }} 
                style={{ background: '#F5F5F5' }}>
                    <Typography >Overall rating</Typography>
                    <Rating name="no-value" value={null}  />
                    <Box className="reviewbox" >
                        <InputBase placeholder='Write Your Review' ></InputBase>
                    </Box>
                    <Box className="buttonbox" >
                        <Button variant="contained" size="small" >Submit</Button>
                    </Box>
                </Typography>

            </Paper>



        </Box>
    )
}
export default Book