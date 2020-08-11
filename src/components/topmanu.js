import React from "react";
import { Link } from "react-router-dom";
import "./getmobilecss/topmanu.css"
import { Typography } from "@material-ui/core";

const topmanu = () => {
    return ( 


<div class="topmanu">
<Link to="/">Home</Link>
          
<Link to="/addProduct">create an ad</Link>
<Link to="/aboutUs">About Us</Link>
          <li style={{ display: "inline", padding: "5px" }}>
          
        </li>
    
        
          
        </div>

     );
}
 
export default topmanu ;
