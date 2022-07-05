import React from "react";
import Box from '@mui/material/Box';
import Header from "../../components/Header/header";
import {getBooks} from '../../Services/dataservice'
import Books from "../../components/Books/Books";
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import Book from "../../components/Book/Book";
import { TryRounded } from "@mui/icons-material";
import { PinDropSharp } from "@material-ui/icons";



function Home(){

    const [books,setBooks]=React.useState([])
    const [currentBook, setCurrentBook]=React.useState({})
    const [display,setDisplay]=React.useState(true)
    
    const listenToBooks=(bookobj)=>{
        
        setCurrentBook(bookobj)
        setDisplay(false)
    }
    

    const getBooksFromServer=(data)=>{
    getBooks().then((response)=>{
            
            setBooks(response.data.result)
           
        }).catch((error)=>{

            console.log(error)
            
        })

    }
    React.useEffect(()=>{
        //console.log(getBook)
        getBooksFromServer()
        
    },[currentBook])

    return(
        <Box sx={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            flexDirection:'column'
            
        }}>
            <Box>
                <Header/>
            </Box>
            <Box sx={{
                 height:'100vh',
                 width:'100vw',
                 }}>
                     {display?
            <Grid sx={{ width: '90%',
                    position:'relative',
                            top:'5%',
                            left:'5%',
                            display:'flex',
                            flexDirection:'row',
                            flexWrap:'wrap',
                            justifyContent:'flex-start'

        }}> 
           
        {                
         books.map((book)=>(
         <Books book={book}  listenToBooks={listenToBooks} />
                        
         ))
        }
     </Grid>:
                <Book currentBook={currentBook} />
    }
            </Box>
            
        </Box>
    )
}


export default Home