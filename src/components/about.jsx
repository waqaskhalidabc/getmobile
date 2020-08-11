import React from 'react'
import {  makeStyles } from "@material-ui/core";
import Searchmanu from "./searchmanu"
import Topmanu from "./topmanu";

const myStyle=makeStyles({


    hero :{
        backgroundColor: "#676b8f",
        height:"600px", 
        width:'100%',
        backgroundSize:"cover",
        backgroundPosition: "center",
    
    },})

const aboutUs = () => {
    const classes=myStyle();
    


    return ( 

        <div className={classes.hero}>
              <Searchmanu/>
    <Topmanu/>
            
            
            <h1  style={{float:'left',marginLeft:'40%'}}>About Us</h1 ></div>
     );
}
 
export default aboutUs;