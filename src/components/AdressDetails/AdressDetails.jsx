import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormLabel } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { Button } from "@mui/base";
import {customerCart} from "../../Services/dataservice"

function AddressDetails(props){



    const [customer, setCustomer]=React.useState({addressType:"",fullAddress:"",city:"",state:""})
    const city=(e)=>{

        setCustomer({...customer,city:e.target.value})

    }
    const state=(e)=>{

        setCustomer({...customer,state:e.target.value})
    }
    const address=(e)=>{
        
        setCustomer({...customer,fullAddress:e.target.value})

    }
    
    const addressType =(e)=>{

        setCustomer({...customer,addressType:e.target.value})

    }

     
    const orderSubmit=()=>{
        props.listentoContinue()
    
        customerCart(customer).then((response) => {
            console.log(response)
        
           
        }).catch((error) => {
            console.log(error)
        })
        
    }
        


    
    return(
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            width:'60vw',
            marginTop:2,
            height:280,
            justifyContent:'space-between'


        }}>
            <Box sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            width:'100%'}}>
            <Typography sx={{position:'relative'}}>Customer Details</Typography>
            <Typography sx={{border:'1px solid red',position:'relative',left:220}}>Add New Address</Typography>
            </Box>


            <Box sx={{
            display:'flex',
            flexDirection:'column',
            width:'100%',
            height:400,alignItems:'center'
            
                }}>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-around',
                        width:'100%',
                        marginTop:1
                       
                    }}>
                            <TextField id="outlined-basic" label="fullname" variant="outlined" sx={{width:'40%'}} />
                            <TextField id="outlined-basic" label="mobile" variant="outlined" style={{width:'40%', height:'1px'}}  />
                            </Box>
                    
                           <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Minimum 3 rows"
                            style={{ width: '89%',marginTop:3 }} onChange={address}
                          />
                    
                    



                  <Box sx={{
                        display:'flex',
                        justifyContent:'space-around',
                        width:'100%',
                        marginTop:1
                       
                    }}>
                            <TextField id="outlined-basic" label="state" variant="outlined" sx={{width:'40%'}} onChange={state}/>
                            <TextField id="outlined-basic" label="city" variant="outlined" style={{width:'40%', height:'1px'}} onChange={city} />
                            </Box>
                    
                            <FormControl sx={{marginTop:1}} >
                            
                                 <FormLabel id="demo-controlled-radio-buttons-group" sx={{position:'relative',right:200,}}>Type</FormLabel>
                                 <RadioGroup sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',}}  onClick={addressType}>
                                        <FormControlLabel value="Home"  control={<Radio />} label="home" sx={{position:'relative',}}  />
                                        <FormControlLabel value="Office" control={<Radio />} label="office" />
                                        <FormControlLabel value="Other" control={<Radio />} label="other" sx={{position:'relative',}}/>
                                    
                                    
                                </RadioGroup>

                            </FormControl>
                            

            </Box>
            <Box>
            <button style={{width:200,
              position:'relative',
              height:50,
              left:500,
              bottom:40,
              
              background:'blue',border:'1px solid blue',borderRadius:'30px,30px,30px,30px'}} onClick={orderSubmit} >Continue</button>
           </Box>
        </Box>
    )


}
export default AddressDetails