import React from "react";
import ReactDOM from "react-dom";
import { Grid, useStyles, Typography, makeStyles } from "@material-ui/core";
import "./getmobilecss/searchmanu.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import ProductDetails from "./../components/productDetails";
import { Link } from "react-router-dom";
import phone from "../images/phones.jpg";
const useStyle = makeStyles({
  hero: {
    width: "200px",
    height: "270px",
    backgroundColor: "gray",
    overflow: "hidden",
    borderRadius: "10px",
    marginLeft: "33px",
    marginTop: "30px",
  },

  hero1: {
    display: "flex",
    flexDirection: "column",
  },
});

// const user = {
//   name: "Bilal",
//   courses: ["c", "c++"],
//   gpa: { f1: 3.2, s2: 2.9 },
// };

const NewCard = (props) => {
  console.log("props are", props);
  const classes = useStyle();
  const id = props._id;
  return (
    <div className={classes.hero}>
      <div className={classes.hero1}>
        <Typography variant="subtitle1">Rs. {props.price}</Typography>
      </div>
      <div class="adimage" className={classes.hero1}>
        <Link to={{ pathname: `/productDetails/${id}`, waqas: props }}>
          {" "}
          <img
            style={{ marginLeft: "23px" }}
            src="/images/adimg.jpg"
            width="150px"
            height="150px"
            alt="dfsfsf"
          />
        
        <div class="caption" className={classes.hero1}>
          <h5 style={{ color: "blue", marginLeft: "10px", marginTop: "10px" }}>
            {props.title}
            
          </h5>
          <h6 style={{ marginLeft: "20px" }}>Ram:{props.ram}</h6>
        </div></Link>
      </div>
    </div>
  );
};

export default NewCard;
