import GenericService from "./GenericService";

import jwtDecode from "jwt-decode";
class LoginService extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          // console.log(err.response.data.message);
          reject(err.response.data);
        });
    });
    //register
  register = (name, email, password) =>

  new Promise((resolve,reject)=>{

    this.post("users/register", { password, email, name }).then((token=>{
      localStorage.setItem("token",token);
resolve(token);

    }))
    .catch((err) => {
      reject(err.response.data);

    });



  })
    //this.post("users/register", { password, email, name });






  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "admin") return true;
      else return false;
    } else return false;
  };
}

let loginService = new LoginService();
export default loginService;
