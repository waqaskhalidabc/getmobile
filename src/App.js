import React from "react";
//import { Grid, makeStyles } from "@material-ui/core";
//import Model from "react-model";
//import Topmanu from "./components/topmanu";

import Home from "./components/Home";
import AddProduct from "./components/addProduct";
import ProductDetails from "./components/productDetails";
import UpdateProduct from "./components/updateProduct";
import AboutUs from "./components/about";
//import AdSpace from "./components/adSpace" 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



function App() {
  var title="this is title";
  return (
    <Router>
      <div>
       
        <Switch>
        <Route path="/addProduct" exact component={AddProduct} />
        <Route path="/updateProduct/:id" component={UpdateProduct} />
        <Route path="/productDetails/:id" component={ProductDetails} />
        <Route path="/aboutUs" component={AboutUs} />
          <Route path="/" exact component={Home} />
          
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
