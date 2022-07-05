import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from 'react';
import Dashboard from '../Pages/Dasboard/dashboard';
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Success from "../Pages/Success/Success";
import Wishlist from "../Pages/Wishlist/Wishlist";



function Router1() {
    return (
        
            <BrowserRouter>
                <Switch>
                    
                   <Route path="/home" component={Home} />
                    <Route  path="/dashboard"  component={Dashboard} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/success" component={Success}/>
                    <Route path="/wishlist" component={Wishlist}/>
                    
                

                 </Switch>
            </BrowserRouter>
        
    )
}

export default Router1;