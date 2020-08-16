import React from "react";
import Searchmanu from "../components/searchmanu"
import Topmanu from "../components/topmanu";
import { Grid, useStyles, makeStyles } from "@material-ui/core";
import productService from "./../services/ProductsService";
import loginService from "./../services/loginService";
import { Link } from "react-router-dom";
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


const ProductDetails = (props) => {
    const [product, setProduct] = React.useState([]);
    const classes=myStyle();
const id=props.match.params.id;

    const getData = () => {
        productService
        .getSingleProduct(id)
        .then((data) => {
          setProduct(data);
  
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
      React.useEffect(getData, []);




    let location = useLocation();
console.log(location.waqas);

    console.log(props.match.params.id);



    

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
      <Grid item xs={8}>
<h5 style={{color:'#691394'}}>Name and brand:</h5>
    <text>{product.title}</text>
<hr></hr>
<h5 style={{color:'#691394'}}>Price: </h5>
    <text>{product.price}</text>
<hr></hr>
<h5 style={{color:'#691394'}}>Ram:</h5>
    <text>{product.ram}</text>
<hr></hr>
<h5 style={{color:'#691394'}}>Contact:</h5>
    <text>{product.contact}</text>
<hr></hr>
<h5 style={{color:'#691394'}}>Description:</h5>
    <text>{product.description}</text>
<hr></hr>

        
      </Grid>
    </Grid>

{   loginService.isAdmin()?  <button className={classes.btn} style={{backgroundColor:'red',marginRight:'30px'}} onClick={()=>{
productService.deleteProduct(id).then(()=>{
    window.location.href = "/";
    alert("product deleted");
}).catch((err)=>{
    alert(err.message);
});
}}>Delete</button>: undefined }


{   loginService.isAdmin()? 

<Link to={{ pathname: `/updateProduct/${id}`, ali: props }}>
<button className={classes.btn} style={{backgroundColor:'yellow'}} onClick={()=>{
    //window.location.href ={ pathname: `/productDetails/${id}`, waqas: props };

}}>update</button></Link>: undefined }


</div>

     );
}
 
export default ProductDetails;