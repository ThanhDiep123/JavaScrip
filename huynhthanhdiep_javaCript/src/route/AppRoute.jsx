import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../component/page/HomePage';
import ContactPage from '../component/page/ContactPage';
import ProductByCategoryPage from '../component/page/ProductByCategoryPage';
import ProductBySubCategoryPage from '../component/page/ProductBySubCategoryPage';

import ProductByBrandPage from '../component/page/ProductByBrandPage';
import LoginPage from '../component/page/LoginPage';
import RegisterPage from '../component/page/RegisterPage';
import ForgetPasswordPage from '../component/page/ForgetPasswordPage';
import ResetPasswordPage from '../component/page/ResetPasswordPage';
import CartPage from '../component/page/CartPage';
import OrderListPage from '../component/page/OrderListPage';
import ProductDetailPage from '../component/page/ProductDetailPage';
import ProductPage from '../component/page/ProductPage';
import ProfilePage from '../component/page/ProfilePage';
import InfoPage from '../component/page/InfoPage';
export class Approute extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/contact' element={<ContactPage />} ></Route>
                <Route path='/info' element={<InfoPage />} ></Route>
                <Route path='/productbycategory/:category/:subcategory' element={<ProductByCategoryPage />} ></Route>
                <Route path='/productbysubcategory/:subCategory' element={<ProductBySubCategoryPage />} ></Route>
                <Route path='/productbybrand' element={<ProductByBrandPage />} ></Route>
                <Route path='/productDetail/:id' element={<ProductDetailPage />} ></Route>
                <Route path='/product' element={<ProductPage />} ></Route>
                <Route path='/login' element={<LoginPage />} ></Route>
                <Route path='/register' element={<RegisterPage />} ></Route>
                <Route path='/profile' element={<ProfilePage />} ></Route>
                <Route path='/forgetpassword' element={<ForgetPasswordPage />} ></Route>
                <Route path='/reset/:pincode' element={<ResetPasswordPage />} ></Route>

                <Route path='/about' element={<InfoPage slug="about" title="Về chúng tôi" />} ></Route>
                <Route path='/policy' element={<InfoPage slug="policy" title="Chính sách bán hàng" />} ></Route>
                <Route path='/warranty' element={<InfoPage slug="warranty" title="Chính sách bảo hành" />} ></Route>

                <Route path='/cart' element={<CartPage />} ></Route>
                <Route path='/orderlist' element={<OrderListPage />} ></Route>

               


            </Routes>
        )
    }
}

export default Approute