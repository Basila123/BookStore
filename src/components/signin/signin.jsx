import React from "react";
import Box from '@mui/material/Box';
import zIndex from "@mui/material/styles/zIndex";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { border, textAlign } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {login} from '../../Services/userService';
import { useHistory } from "react-router-dom";

function Signin(props){
    let history=useHistory()
    //regex
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

    // set an initial values using objects
    //create state and bind the initivalues in it
    const[emailpass, setemailpwd]=React.useState({email:"", password:""})
    //pwdhelper in api mui

    const [pwdhelper,setpwdhelper]=React.useState("")
    const [pwderror,setpwderror]=React.useState(false)
    const [emailhelper,setemailhelper]=React.useState("")
    const [emailerror,setemailerror]=React.useState(false)
    
    const submit=()=>{

        props.signup("hello sign in")
        console.log("hi")
       
    }

    
    function takemailid(event){
        //spread operators
        setemailpwd({...emailpass,email:event.target.value})
        
    }
    function takepwd(event){
        setemailpwd({...emailpass,password:event.target.value})

    }
  

    function onsubmit(){

        if(emailpass.email==="" && emailpass.password==="")
        {
            setemailerror(true)
            setemailhelper("please enter the correct email")

            setpwderror(true)
            setpwdhelper("please enter correct password")

        }

        //using test methode to check the regex

        let emailTest=emailRegex.test(emailpass.email)
        let pwdTest=passwordRegex.test(emailpass.password)
        console.log(emailTest)
        console.log(pwdTest)
        if(emailTest){
            setemailerror(false)
            setemailhelper("")
            
        }
        else {
            setemailerror(true)
            setemailhelper("please enter the correct email")
        }
    
        if(pwdTest)
        {
            setpwderror(false)
            setpwdhelper("")
        }
        else{
            setpwderror(true)
            setpwdhelper("please enter correct password")
        }

    if(emailTest===true && pwdTest===true)
    {
        login(emailpass).then((response)=>{
            console.log(response)
            console.log(response.data.result.accessToken)
            localStorage.setItem("token",response.data.result.accessToken)    
            history.push("/home")
            
            
        }).catch((error)=>{

            console.log(error)
            
        })
    }
    }

    





    return(

             <Box sx={{
                 
                 left: 658,
                 width: 400,
                 height: 400,
                 bottom:200,
                 background: '#FFFFFF 0% 0% no-repeat padding-box',
                 border: 'none',
                 opacity: 1,
                 zIndex:4,
                 display:'flex',
                 flexDirection:'column'
                 }} >
                     <Box sx={{display:'flex',
                      width:'100%',
                      height:'10%',
                      justifyContent:'space-around',
                      flexDirection:'row',
                      bottom:70}}>
                    <button style={{background:'none',border:'none',fontSize:20}}>LOGIN</button>
                    <button onClick={submit} style={{color:'gray',background:'none',border:'none',fontSize:20}}>SIGNUP</button>
                </Box>
                     
                     <Box sx={{
                         display:'flex',
                         flexDirection:'column',
                        // border:'1px solid green',
                         position:'relative',
                         bottom:20,
                         left:30,
                         width:'80%',
                         height:'85%',
                         
                     }}>
                         <TextField id="outlined-basic" 
                         label="Email"
                          variant="outlined" 
                          onChange={takemailid}
                          error={emailerror}
                          helperText={emailhelper}
                          sx={{position:'relative',top:'10%'}} />


                         <TextField id="outlined-basic"
                          label="Password"
                           variant="outlined" 
                           onChange={takepwd}
                           error={pwderror}
                          helperText={pwdhelper}
                           sx={{position:'relative',top:'15%'}}/>
                        <Button onClick={onsubmit} variant="contained" sx={{position:'relative',top:'20%',background: '#A03037 0% 0% no-repeat padding-box'}}
                         >Login</Button>
                        <Box sx={{
                            position:'relative',
                            top:'22%',
                            left:'13%',
                            
                            width: 191,
                            height: 18,
                            opacity: 1,
                            
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center'


                        }}>
                            <Box sx={{width:'23.3%',
                                      height:'5%',
                                      border:'1px solid #00000029',
                                      background:'#00000029'}}></Box>
                            <Box><h4>or</h4></Box>
                            <Box
                            sx={{width:'23.3%',
                                      height:'5%',
                                      border:'1px solid #00000029',
                                      background:'#00000029'}}>
                            </Box>

                        </Box>
                        <Box
                         sx={{display:'flex',
                         flexDirection:'row',
                         position:'relative',
                             top:'30%',
                             justifyContent:'space-around'
                             
                         }}>
                             <Button variant="contained" sx={{width:'35%'}} >Facebook</Button>
                             <Button variant="contained" sx={{width:'35%',background:'#F5F5F5 0% 0% no-repeat padding-box',color:'black'}} >Google</Button>

                        </Box>
                         
                     </Box>
                     

                     
                     

             </Box>
             
        
    )
    
}
export default Signin