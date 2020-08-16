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
    <h1  style={{float:'left',marginLeft:'40%'}}>About Us</h1 >
            <br></br><br></br>
            <h2 style={{float:'left',marginLeft:'33%'}}>About getMobile Pakistan: </h2><br></br><br></br>
<div style={{float:'left',marginLeft:'30%'}}>
    <br></br><h5>GetMobile Pakistan is the premium website started in 2020, <br></br>
dedicated to providing expert tips, news, reviews, Android <br></br>
Phones, Android   Apps, iphone, Android   Tablet,  used   mobiles,  <br></br>
comparison of mobiles, mobile shops, mobile wallpapers, <br></br>
cryptocurrency, videos and blog
  </h5></div>
            </div>
     );
}
 
export default aboutUs;