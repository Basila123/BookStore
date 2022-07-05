import React from "react";
import Box from '@mui/material/Box';
import zIndex from "@mui/material/styles/zIndex";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { border, textAlign } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup/signup.css'
import { useThemeProps } from "@mui/material";
import {signUp} from '../../Services/userService'
import { grey } from "@mui/material/colors";
import { useHistory } from "react-router-dom";



function RedBar() {
    return (
      <Box
        sx={{
          height: 3
        }}
      />
    );
  }




  

function Signup(props){

    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/
    const fullNameRegex = /[A-Z]{1}[a-z]{2,}/
    const phoneNumberRegex=/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    let history=useHistory()


    const [fnamehelper,setfnamehelper]=React.useState("")
    const [fnameerror,setfnameerror]=React.useState(false)
    
    const [emailhelper1,setemailhelper1]=React.useState("")
    const [emailerror1,setemailerror1]=React.useState(false)

    const [pwdhelper1,setpwdhelper1]=React.useState("")
    const [pwderror1,setpwderror1]=React.useState(false)

    const [phnhelper1,setphnhelper1]=React.useState("")
    const [phnerror1,setphnerror1]=React.useState(false)



    const[allform, setallform]=React.useState({ fullName:"",email:"", password:"" , phone: ""})
    
  //methods for events
  const onClick=()=>{
      props.login("from signup")
      console.log()
     
  }

  function takefname(event){
    setallform({...allform,fullName:event.target.value})

    }
    function takephn(event){
        setallform({...allform,phone:event.target.value})

    }

    function takeeemail(event){

        setallform({...allform,email:event.target.value})
    }

    function takepwd(event){
        setallform({...allform,password:event.target.value})

    }

        //onSubmit Regex function
    function onSubmit(){

          if(allform.fullName===" " && allform.email===" " && allform.password==="" && allform.phone==="")
          {
              console.log("dsdd")
              setfnameerror(true)
              setfnamehelper("please enter the first name")
  
              setemailerror1(true)
              setemailhelper1("please enter the correct email")
  
              setpwderror1(true)
              setpwdhelper1("please enter correct password")

              setphnerror1(true)
              setphnhelper1("Please enter a valid number")
  
              
  
          }
  
          let fnameTest=fullNameRegex.test(allform.fullName)
          let emailTest=emailRegex.test(allform.email)
          let pwdTest=passwordRegex.test(allform.password)
          let phnTest=phoneNumberRegex.test(allform.phone)
          //to see the result gotot console either true or false
          console.log(fnameTest)
          console.log(emailTest)
          console.log(pwdTest)
          console.log(phnTest)
  
          if(fnameTest){
              setfnameerror(false)
              setfnamehelper("")
              
          }
          else {
              setfnameerror(true)
              setfnamehelper("please enter the valid name")
              console.log("Hi")
          }
      
      
  
          if(emailTest){
              setemailerror1(false)
              setemailhelper1("")
              
          }
          else {
              setemailerror1(true)
              setemailhelper1("please enter the correct email")
              console.log("Hi")
          }
      
          if(pwdTest)
          {
              setpwderror1(false)
              setpwdhelper1("")
          }
          else{
              setpwderror1(true)
              setpwdhelper1("please enter correct password")
              console.log("Hi")
          }

          if(phnTest)
          {
            setphnerror1(false)
            setphnhelper1("")
           

          }
          else{
            setphnerror1(true)
            setphnhelper1("please enter correct password")
            console.log("Hi")
        }
          
          // if all the text fields are true share it into  local storage
  
         if(fnameTest===true && emailTest===true && pwdTest=== true && phnTest=== true)
          {
          signUp(allform).then((response)=>{
              console.log(response)
              localStorage.setItem("token",response.data.result.accessToken)
              //history.push("/home")
              
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
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        bottom:100,
        border: 'none',
        opacity: 1,
        zIndex:4,
        display:'flex',
        flexDirection:'column'
        }}>
            <Box sx={{display:'flex',
                width:'100%', 
                height:'10%',
                justifyContent:'space-around',
                flexDirection:'row',
                bottom:70}}>
                    <button onClick={onClick} style={{color:'gray',background:'none',border:'none',fontSize:20}}>LOGIN</button>
                    <button style={{background:'none',border:'none',fontSize:20}}>SIGNUP</button>
                </Box>
           
            <Box sx={{
                display:'flex',
                flexDirection:'column',
               // border:'1px solid green',
                position:'relative',
                left:30,
                width:'80%',
                height:'65%',
                marginTop:2
                
            }}>
                <TextField id="outlined-basic" 
                label="Full Name"
                 variant="outlined" 
                 onChange={takefname}
                 error={fnameerror}
                 helperText={fnamehelper}
                 sx={{position:'relative',marginBottom:10,height:'10px'}} />


                <TextField id="outlined-basic"
                 label="Email"
                  variant="outlined" 
                  onChange={takeeemail}
                  error={emailerror1}
                  helperText={emailhelper1}

                  sx={{position:'relative',marginBottom:10,height:'10px'} }/>

                <TextField id="outlined-basic"
                 label="Password"
                  variant="outlined" 
                  onChange={takepwd}
                  error={pwderror1}
                  helperText={pwdhelper1}
                  
                  sx={{position:'relative',marginBottom:10, height:'10px'}}/>

                  <TextField id="outlined-basic"
                  label="Phone"
                  variant="outlined" 
                  onChange={takephn}
                  error={phnerror1}
                  helperText={phnhelper1}
                  sx={{position:'relative',marginBottom:10,height:'10px'}}/>
                  
               <Button variant="contained" sx={{position:'relative' ,bottom:10,background: '#A03037 0% 0% no-repeat padding-box'}}
               onClick={onSubmit} >Signup</Button>
              
               
                
            </Box>
            

            
            

    </Box>
    

)
             
        
    
    
}
export default Signup