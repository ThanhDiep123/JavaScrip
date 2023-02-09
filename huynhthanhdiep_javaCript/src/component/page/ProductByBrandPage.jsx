import React, { Component } from 'react'
import Header from '../common/Header';
import ProductByBrand from '../product/ProductByBrand';
import Footer from '../common/Footer';
export class ProductByBrandPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProductByBrand />
                <Footer />
            </div>
        )
    }
}
export default ProductByBrandPage