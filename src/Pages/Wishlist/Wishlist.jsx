import React from "react";
import { Box } from "@mui/system";
import Header from "../../components/Header/header";
import { getWhishList } from '../../Services/dataservice'
import Wish from "../../components/Wish/Wish";
import { Grid,Paper,Typography,Card,Button } from "@mui/material";
function Wishlist(){

    const [bookWishList,setBookWishList]=React.useState([])
    const getBookFromWishList = () => {
        getWhishList().then((response)=>{
                    
            setBookWishList(response.data.result)
                   
                }).catch((error)=>{
        
                    console.log(error)
                    
                })
        
            }
         

         React.useEffect(()=>{
            //console.log(getBook)
            getBookFromWishList()
            
        },[])

    return(
        <Paper sx={{width:'100vw',
                 height:'100vh',
                 border:'1px solid red',display:'flex',
                 flexDirection:'column'}}>
                     <Header/>
                     <h1> WishList</h1>
            <Grid>
            {
                    bookWishList.map((book)=>(
                    <Wish book={book}/>))
                }

            </Grid>
                     
                

            </Paper>
    )
}
export default Wishlist