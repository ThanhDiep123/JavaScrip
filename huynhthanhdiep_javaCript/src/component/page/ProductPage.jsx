import React, { Component } from 'react'
import Header from '../common/Header';
import BrandMenu from '../product/BrandMenu';
import CategoryMenu from '../product/CategoryMenu';
import Advertising from '../product/Advertising';
import NewArrival from '../home/NewArrival';
import Featured from '../home/Featured';

import Footer from '../common/Footer';

export class ProductPage extends Component {
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
                    <div class="col-sm-9 padding-right">
                        <NewArrival />
                        <Featured />

                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}
export default ProductPage