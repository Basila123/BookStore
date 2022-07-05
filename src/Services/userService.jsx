import axios from 'axios'


 export const signUp=(obj)=>{
     let response=axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/registration",obj)
     
     return response

 }

 export const login=(obj)=>{

   let response=axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/login",obj)
     
    return response
   
  }
  
  