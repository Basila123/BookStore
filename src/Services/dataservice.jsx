import React from "react";
import axios from 'axios'

const headerconfig={

    headers:{

        "x-access-token":localStorage.getItem("token")
    }
}

export const getBooks=()=>{

    let response=axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerconfig)
    return response
}
// here we use null bcoz, 
export const postCart=(id)=>{
    console.log(id)
    let response=axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,{},headerconfig)
    return response
}

export const getCart=()=>{
    //console.log(id)
    let response=axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`,headerconfig)
    return response
}

export const customerCart=(data)=>{
    let response=axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,data,headerconfig)
    return response

}

export const order=(data)=>{
    let response=axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,data,headerconfig)
    return response
}

export const updatetBook=(id,data)=>{
    console.log(id,data)
    let response=axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,data,headerconfig)
    return response

}


export const postWishlist=(id)=>{
    console.log(id)
    let response=axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,{},headerconfig)
    return response
}



export const getWhishList=()=>{
    //console.log(id)
    let response=axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items`,headerconfig)
    return response
}

export const removeCartItem=(id)=>{
    //console.log(id)
    let response=axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,headerconfig)
    return response
}

