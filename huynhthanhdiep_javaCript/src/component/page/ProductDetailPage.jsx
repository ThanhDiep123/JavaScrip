import React, { Component } from 'react'
import Header from '../common/Header';
import { useParams } from "react-router-dom";
import ProductDetail from '../product/ProductDetail';
import SimilarProduct from '../product/SimilarProduct';
import Footer from '../common/Footer';

export function ProductDetailPage(){
    const { id } = useParams();
    return (
        <div>
            <Header />
            <ProductDetail product_id={id} />
            <SimilarProduct />

            <Footer />
        </div>
    );
    
}
export default ProductDetailPage