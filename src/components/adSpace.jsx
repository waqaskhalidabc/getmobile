import React from "react"
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { makeStyles, } from "@material-ui/core";
import "./getmobilecss/searchmanu.css"
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import productService from "../services/ProductsService";
import axios from "axios";
import NewCard from "./newcard"
import $ from 'jquery';
import 'jquery';
import phone from "../images/phones.jpg";
const useStyle=makeStyles({


hero :{

display : "flex",
width : "850px",
height : "900px",
float:"right",
marginRight:"20%",
marginTop: "120px",
overflow: "hidden",
flexWrap: "wrap",
overflowY:"auto",

},

})


const Home = () => {
    const [products, setProducts] = React.useState([]);
    //get function
    const getData = () => {
      productService
      .getProducts()
      .then((data) => {
        setProducts(data);

        })
        .catch((err) => {
          console.log(err);
        });
    };
    //getData();
    React.useEffect(getData, []);
    const classes=useStyle();
    return ( 
        <div className={classes.hero}>


{products.map((products, index) => (
            <NewCard key={index} title={products.title}
             price={products.price} ram={products.ram} _id={products._id}/>
          ))}

        </div>
     );
}

export default Home;