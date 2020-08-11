import React from "react"
import "./getmobilecss/card1.css"
const card1 = (props) => {
    var price=props.price;
    return ( 
<div class="ad1">
          <div class="offer-text2">
                price : {price}
          </div>
          <div class="adimage">
              <img src="/images/adimg.jpg" alt="dfsfsf" />
              <div class="caption">
                <h4><a href="#">Samsunkjyhkkkkkkkkkkkkkkkkkkkkkg Galaxy </a></h4>
                <a href="#">4gb ram,64gb rom </a>    </div>
          </div>
      </div>

     );
}
 
export default card1;