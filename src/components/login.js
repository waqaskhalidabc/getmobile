import React from "react";
import { useState } from "react";
import loginService from "../services/loginService";
import { Modal, makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCode,faCut,faWindowClose } from '@fortawesome/free-solid-svg-icons'
//import {Grid} from "@material-ui/core"
//import { positions,sizing } from '@material-ui/system';

const btnstyle = {
  position: "absolute",
  top: "15px",
  right: "10px",
  backgroundColor: "orange" /* Green */,
  border: "none",
  color: "white",
  padding: "5px 15px",
  textAlign: " center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "17px",
};

const useStyle = makeStyles({
  hero: {
    width: "400px",
    height: "350px",
    backgroundColor: "#24248f",
  },
  btn: {
    marginTop: "40px",
    width: "120px",
    height: "40px",
    backgroundColor: "#4CAF50 ",
    border: "none",
    color: "white",

    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    marginLeft: "270px",
  },
  inpt: {
    width: "100%",
    height: "50px",
    marginTop: "50px",
    border: "none",
    display: "inline-block",
    fontSize: "25px",
  },
  textfield:{

color:'white',

  }
});

const Loginform = (props) => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const classes = useStyle();

  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [modelIsclose, setModelIsClose] = useState(true);
  const [modelIsclose1, setModelIsClose1] = useState(true);
  const [modelIsOpen1, setModelIsOpen1] = useState(false);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  return (
    <div>
      {!loginService.isLoggedIn() ? (
        <button
          type="button"
          onClick={() => {
            setModelIsOpen(true);
            setError('');
            setError1('');
          }}
          style={btnstyle}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            loginService.logout();
            window.location.href = "/";
          }}
          style={btnstyle}
        >
          logout
        </button>
      )}

      <Modal
        open={modelIsOpen}
        onClose={modelIsclose}
        onBackdropClick={()=>{
setModelIsOpen1(false);
setModelIsOpen(false);

        }

        }
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
        }}
      >
        <div
          className={classes.hero}
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          
          <br></br>
          
          <div
            id="errmessage"
            style={{ marginTop: "20px", color: "red", fontSize: "25px" }}
          >
            {"   "}
            {error ? (
              <h6 className="alert alert-danger">{error}</h6>
            ) : undefined}
          </div>
          <TextField
            label="email"
            style={{ marginRight: "10px" }}
            InputProps={{
              className: classes.textfield
            }}
       
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="password"
            style={{ marginTop: "20px", marginRight: "10px" }}
            InputProps={{
              className: classes.textfield
            }}
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className={classes.btn}
            onClick={() => {
              //setModelIsOpen(false);
              loginService
                .login(email, password)
                .then((data) => {
                  window.location.href = "/";
                })
                .catch((err) => {
                  
                  setError(err.message);
                });
            }}
          >
            Login
          </button>
          <h5 style={{ marginTop: "20px" }}>
            Not registered?{" "}
            <button
              style={{
                border: "none",
                backgroundColor: "#afcfcf",
                fontSize: "20px",
              }}
              onClick={() => {
                setModelIsOpen1(true);
                //setModelIsOpen(false);
              }}
            >
              Sign Up
            </button>
          </h5>
        </div>
      </Modal>







      <Modal
        open={modelIsOpen1}
        onClose={modelIsclose1}
        onBackdropClick={()=>{
          setModelIsOpen1(false);
          setModelIsOpen(false);
          
                  }
          
                  }
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
        }}
      >
        <div
          className={classes.hero}
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
         
          
          <div
            style={{ marginTop: "10px", color: "red", fontSize: "20px" }}
        > {error1}</div>
          <TextField
            label="Name"
            style={{ marginTop: "20px" }}
            InputProps={{
              className: classes.textfield
            }}
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
          <br />
          <TextField
            label="email"
            //style={{marginTop:'20px'}}
            InputProps={{
              className: classes.textfield
            }}
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="password"
            style={{ marginTop: "20px" }}
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className={classes.btn}
            onClick={() => {
              loginService.register(name, email, password).then((data) => {
                window.location.reload();
              }).catch((err) => {
               
                setError1(err.message);
                console.log(err.message);
              });;

              //setModelIsOpen1(false);
            }}
          >
            Register
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Loginform;
