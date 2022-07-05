import React from "react";
import { border, Box } from "@mui/system";
import '../Dasboard/dashboard.css';
import Avatar from '@mui/material/Avatar';
import zIndex from "@mui/material/styles/zIndex";
import signupimage from '../Dasboard/signin1.png';
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

function Dashboard(){

    const [display,setDisplay]=React.useState(false)
    const[colors,setColor]=React.useState("")


    const signup=()=>{
        setDisplay(false)
        setColor('black')
       
        
    }
    const login=()=>{
            setDisplay(true)
            setColor('gray')
        
    }


    return(
        <Box className='Main-container'>


      <Box
      sx={{
        width: 850,
        height: 350,
        position:'relative',
        
        //top:250,
        display:'flex',
        flexDirection:'row',
        zIndex:0
       
         }}>
             <Box sx={{
                    position:'relative',
                   // top: 20,
                   // left: 120,
                    width: 624,
                    height: 391,
                    background:' #F5F5F5 0% 0% no-repeat padding-box',
                    borderRadius: 21,
                    opacity: 1,
                    border:'1px solid green'
                    
                  
                    

             }}>
                 <Avatar
        
                    src={signupimage }
                    sx={{ 
                        position:'relative',
                        top: '10%',
                       left: 60,
                        width: 245,
                        height: 245,
                     }}
                 />
                 <Box sx={{position:'relative',
                                   
                                   top:'16%',
                                   left:'18%',
                                   width: 209,
                                   height: 24,
                                   
                                   font: 'normal normal medium 18px/24px Roboto',
                                   letterSpacing: 0,
                                   color: '#0A0102',
                                    textTransform: 'uppercase',
                                    opacity: 1,
                            
                                    //text:'Online Book Shopping',
                                    
                                    

                                                                    

                 }}>
                 <h2 >Online Book Shopping</h2>
                 </Box>
                
                

             </Box>

             <Box sx={{width: 400,
        height: 500,
        position:'relative',
        bottom:50,
        right:100,
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 5px 15px #00000029',
        border: '1px solid #E4E4E4',
        borderRadius: 6,
        opacity: 1,
        zIndex:4,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'}}>
            
             <Box sx={{
                 position:'relative',
                 
                 
             }}>
                
             
             { display?<Signin signup={signup}/>:<Signup login={login}/>}
               
                
            </Box>
             </Box>
                 
             

        </Box>
    </Box>
    )
}
export default Dashboard