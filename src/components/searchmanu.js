import React from "react"
import ReactDOM from 'react-dom';
import { Grid } from "@material-ui/core";
import "./getmobilecss/searchmanu.css"
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Login from "../components/login"

const searchmanu = () => {
    var title="this is title";
    return ( 
      
<div class="searchmanu" style={{height:"55px"}}>

<img src="/images/Capture.jpg"   alt="logoimg">

</img>
    <Grid container direction="row" xs={10} spacing={1}>
        <Grid xs={5} spacing={1}></Grid>
    <Grid item xs={2} >
<input type="text" placeholder="Search a phone ...." name="name"/>
</Grid>
<Grid item xs={1} >
<button class="search1">Search</button>

</Grid>
</Grid>


<Login/>

</div>





     );
}
 
export default searchmanu;