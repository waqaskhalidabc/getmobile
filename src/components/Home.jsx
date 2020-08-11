import React from "react"
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import { Grid, useStyles, makeStyles } from "@material-ui/core";
import "./getmobilecss/searchmanu.css"
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Searchmanu from "./searchmanu"
import Topmanu from "./topmanu";
import Sidenav from "./sidenav";
import AdSpace from "./adSpace"
import Login from "./login"


const useStyle=makeStyles({


hero :{
    backgroundImage: "url(../images/phones.jpg)",
height:"1500px", 
backgroundSize:"cover",
backgroundPosition: "center",

overflow:"hidden",

position:"relative"

},

endBox:{

    padding:"20px",
    color:"#fff",
    backgroundColor:"orange",
    fontSize:"14px",
    position:"absolute",
   
    bottom:"0",
   
     width: "100%",
     display:"inline-block",
     



}

})



const Home = () => {
    const classes=useStyle();
    return ( 
        <div className={classes.hero}>


<Login/>
<Searchmanu/>


<Topmanu/>




<Sidenav/>
<Login/>
<AdSpace/>


<div  className={classes.endBox} >
        &copy; 2020 | &nbsp; All Rights Reserved | &nbsp; www.GetMobile.com | &nbsp; 24x7 support | &nbsp; Email us: waqas123wqs@gmail.com
    </div>
        </div>

     );
}
 
export default Home;