import React, { Component } from 'react'
import axios from "axios";
import Appurl from "../api/Appurl";
import { Link } from "react-router-dom";

export class Featured extends Component {
   constructor() {
      super();
      this.state = {
        arrayProduct: [],
      };
    }
    getData() {
      axios
        .get(Appurl.productsByRemark + "/featured")
        .then((response) => {
          var data = response.data;
        //   for (let a = 0; a < 4; a++) {
        //     console.log("Vi tri", a, data[a]);
        //   }
          this.setState({
            arrayProduct: data,
          });
        })
        .catch((error) => {});
    }
    componentDidMount() {
      this.getData();
    }
  render() {
   var arrayProduct = this.state.arrayProduct;
   var ViewProductFeatured = arrayProduct.map((product, i)=>{
      return(
<div className="col-sm-3">
            <div className="product-image-wrapper">
               <div className="single-products">
                  <div className="productinfo text-center">
                     <img
                        src={product.image}
                        alt=""/>
                     <h2>{product.price}</h2>
                     <p>{product.name}</p>
                     <a href="#st" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                  </div>
                  <div className="product-overlay">
                     <div className="overlay-content">
                     <Link to={"/productdetail/" + product.id} >
                           <img
                              src={product.image}
                              alt=""/>
                           <h2>{product.price}</h2>
                           <p>{product.name}</p>
                           <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   })
    return (
      <div className="features_items">
         <h2 className="title text-center">Features Items</h2>
         {ViewProductFeatured}
        

      </div>
    )
  }
}

export default Featured