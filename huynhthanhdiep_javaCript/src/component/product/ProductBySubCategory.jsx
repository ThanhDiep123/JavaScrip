import React, { Component } from "react";
import axios from "axios";
import Appurl from "../api/Appurl";
import { Link } from "react-router-dom";

export class ProductBySubCategory extends Component {
  constructor() {
    super();
    this.state = {
      arrayProduct: [],
      subCate: "Áo nữ"
    };
  }
  getData() {
    axios
      .get(Appurl.productsBySubCategory + "/" + this.state.subCate)
      .then((response) => {
        console.log("URL: ", Appurl.productsBySubCategory + "/" + this.state.subCate);
        var data = response.data;
        this.setState({
          arrayProduct: data,
        });
      })
      .catch((error) => { });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    var arrayProduct = this.state.arrayProduct;
    console.log(arrayProduct)
    var ViewProduct = arrayProduct.map((product, i) => {
      return (
        <div className="col-sm-3" key={"product-" + i}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src={product.image} alt="" />
                <h2>{product.price}</h2>
                <p>{product.name}</p>
                <a href="#st" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
              <div className="product-overlay">
                <div className="overlay-content">
                  <Link to={"/productDetail/" + product.id} >
                    <img src={product.image} alt="" />
                    <h2>{product.price}</h2>
                    <p>{product.name}</p>
                    <p className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>
          <h2 className="title text-center">Thời trang nữ - {this.state.subCate}</h2>
          {ViewProduct}
        </div>
      </div>
    );
  }
}

export default ProductBySubCategory;