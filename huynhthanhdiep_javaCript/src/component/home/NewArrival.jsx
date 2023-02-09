import React, { Component } from "react";
import axios from "axios";
import Appurl from "../api/Appurl";
import { Link } from "react-router-dom";
export class NewArrival extends Component {
    constructor() {
        super();
        this.state = {
            arrayProduct: [],
        };
    }
    getData() {
        axios
            .get(Appurl.productsByRemark + "/new")
            .then((response) => {
                var data = response.data;
                //   for (let a = 0; a < 4; a++) {
                //     console.log("Vi tri", a, data[a]);
                //   }
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
        var ViewProductArrial = arrayProduct.map((product, i) => {
            return (
                <div className="col-sm-3" key={"sanpham" + i}>
                    <div className="product-image-wrapper" >
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={product.image} alt="" />
                                <h2>{product.price}</h2>
                                <p>{product.name}</p>
                                <Link
                                    to={"/productDetail"/ + product.id}
                                    className="btn btn-default add-to-cart"
                                >
                                    <i className="fa fa-shopping-cart"></i>Add to cart
                                </Link>
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
            <div className="features_items">
                <h2 className="title text-center">New Items</h2>

                {ViewProductArrial}
            </div>
        );
    }
}

export default NewArrival;
