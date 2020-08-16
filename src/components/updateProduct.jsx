import React from "react";
import Searchmanu from "../components/searchmanu"
import Topmanu from "../components/topmanu";
import { Grid, useStyles, makeStyles, TextField } from "@material-ui/core";
import productService from "./../services/ProductsService";
import loginService from "./../services/loginService";
import {
    useLocation
  } from "react-router-dom";



  const myStyle=makeStyles({


    hero :{
        backgroundImage: "url(../images/phones.jpg)",
    height:"700px", 
backgroundSize:"cover",
backgroundPosition: "center",
    
    },

btn:{

width:'100px',
border:'none',
borderRadius:'15px',
float:'right',
height:'35px'
}

})


const UpdateProduct = (props) => {
    const [product, setProduct] = React.useState([]);
    const [title, setTitle] = React.useState(product.title);
    const [price, setPrice] = React.useState(product.price);
    const [ram, setRam] = React.useState(product.ram);
    const [description, setDescription] = React.useState(product.description);
    const [contact, setContact] = React.useState(product.contact);
    const classes=myStyle();
    console.log(props);
const id=props.match.params.id;

    const getData = () => {
        productService
        .getSingleProduct(id)
        .then((data) => {
         setProduct(data);
         setTitle(data.title);
         setPrice(data.price);
         setRam(data.ram);         
  setContact(data.contact);
  setDescription(data.description);
  
          })
          .catch((err) => {
            //console.log(err);
          });
      };
      //getData();
      React.useEffect(getData, []);




    



    

    return ( 

<div className={classes.hero}>
<Searchmanu/>
    <Topmanu/>
    


    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1 >Phone Details :</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
      <h5 style={{color:'#691394'}}>Name and brand: </h5>
<TextField
            
            style={{ marginRight: "10px" }}
            fullWidth
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

<h5 style={{color:'#691394'}}>Price: (number)</h5>
<TextField
            
            style={{ marginRight: "10px" }}
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

<h5 style={{color:'#691394'}}>Ram:</h5>
<TextField
            
            style={{ marginRight: "10px" }}
            fullWidth
            value={ram}
            onChange={(e) => {
              setRam(e.target.value);
            }}
          />

<h5 style={{color:'#691394'}}>Description:</h5>
<TextField
            
            style={{ marginRight: "10px" }}
            fullWidth
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />



<h5 style={{color:'#691394'}}>Contact:(11 digit)</h5>
<TextField
            
            style={{ marginRight: "10px" }}
            fullWidth
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />

{   loginService.isAdmin()?  <button className={classes.btn} style={{backgroundColor:'yellow',float:'right',marginTop:'30px'}} onClick={()=>{
productService.updateProduct(id,{title,price,ram,description,contact}).then(()=>{
    window.location.href = "/";
}).catch((err)=>{
    alert("invalid entries");
});
}}>update</button>: undefined }
        
      </Grid>
    </Grid>







</div>

     );
}
 
export default UpdateProduct;