import React, { Component } from 'react'
import Header from '../common/Header';
import BrandMenu from '../product/BrandMenu';
import CategoryMenu from '../product/CategoryMenu';
import Advertising from '../product/Advertising'

import ProductByCategory from '../product/ProductByCategory';
import Footer from '../common/Footer';
export class ProductByCategoryPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-sm-3">
                    <div className="left-sidebar">
                            <CategoryMenu />
                            <BrandMenu />
                            <Advertising />

                            
                        </div>
                    </div>
                    <div className="col-sm-9 padding-right">
                        <ProductByCategory />
                        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default ProductByCategoryPage