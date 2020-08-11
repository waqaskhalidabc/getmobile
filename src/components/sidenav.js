import React from "react"
import "./getmobilecss/sidenav.css"
const sidenav = () => {
    return ( 
        
        <div class="sidenav">
        
          <a class="ab" href="#tb">Top brands</a>
          <div class="dropdown-content1">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a class="ab" href="#nt">New technology</a>
          <div class="dropdown-content2">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a class="ab" href="#pr">Phone by ram size</a>
          <div class="dropdown-content3">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a class="ab" href="#pc">Phone by camera</a>
          <div class="dropdown-content4">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          </div>
     );
}
 
export default sidenav;