import React, { Component } from "react";
import CategoryMenu from "../product/CategoryMenu";
import BrandMenu from "../product/BrandMenu";
import ProductBySubCategory from "../product/ProductBySubCategory";
import Header from "../common/Header";
import Footer from "../common/Footer";
export class ProductBySubCategoryPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-sm-3">
            <div className="left-sidebar">
              <CategoryMenu />
              <div className="brands_products">
                <BrandMenu />
              </div>
              <div className="shipping text-center">
                <img src="assets/images/home/shipping.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-9 padding-right">
            <div className="features_items">
              <ProductBySubCategory />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductBySubCategoryPage;