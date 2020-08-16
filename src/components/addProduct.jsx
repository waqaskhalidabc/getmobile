import React from "react";
import { Grid, TextField, Button,useStyle } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core";
import Searchmanu from "./searchmanu"
import Topmanu from "./topmanu";
import productService from "../services/ProductsService";


const myStyle=makeStyles({


  hero :{
      backgroundImage: "url(../images/phones.jpg)",
      height:"600px", 
      backgroundSize:"cover",
      backgroundPosition: "center",
  
  },})


const AddProduct = (props) => {
    const classes=myStyle();
    const [title, setTitle] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [ram, setRam] = React.useState("");
    const [description, setDescrription] = React.useState("");
    const [contact, setContact] = React.useState("");
    return (


<div className={classes.hero}> 
    
    <Searchmanu/>
    <Topmanu/>
    
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1 style={{color:'orange'}}>Add details :</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="Name and brand (min 3 characters required)"
          fullWidth
          
          onChange={(e) => {
              setTitle(e.target.value)
            
          }}
        />
        <TextField
          label="Set Price (only number)"
          fullWidth
          
          onChange={(e) => {
              setPrice(e.target.value);

            
          }}
        />
        <TextField
          label="Ram (required)"
          fullWidth
          
          onChange={(e) => {
              setRam(e.target.value);
            
          }}
        />
        <TextField
          label="Details"
          fullWidth
          
          onChange={(e) => {
              setDescrription(e.target.value);
            
          }}
        />
        <TextField
          label="Contact (min 11 digit required)"
          fullWidth
          
          onChange={(e) => {
              setContact(e.target.value);
            
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) =>{
            productService
              .addProduct({ title,price,ram,description,contact })
              .then((data) => {
                console.log(data);
                props.history.push("/");
              })
              .catch((err) => {
                console.log(err.message);
                alert(err.message);
              });
          } }
        >
          Add
        </Button>
      </Grid>
    </Grid>



</div>

      );
}
 
export default AddProduct;