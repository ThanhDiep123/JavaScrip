import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../component/page/Homepage'
import Productpage from '../component/page/Productpage'
import Infopage from '../component/page/Infopage'
import Contactpage from '../component/page/Contactpage'
import Cartpage from '../component/page/Cartpage'
import Loginpage from '../component/page/Loginpage'
import Registerpage from '../component/page/Registerpage'
import Profilepage from '../component/page/Profilepage'
import Orderlistpage from '../component/page/Orderlistpage'
import Productbycategorypage from '../component/page/ProductbySubCategorypage'
import Forgetpasswordpage from '../component/page/Forgetpasswordpage'
import Resetpasswordpage from '../component/page/Resetpasswordpage'
import ProductSubCategory from '../component/page/ProductSubCategory'

export class Approute extends Component {
    render() {
        return (
            <Routes>
                {/* navbar */}
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/products" element={<Productpage />}></Route>
                <Route path='/about' element={<Infopage slug="about" title="Về chúng tôi" />} ></Route>
                <Route path='/policy' element={<Infopage slug="policy" title="Chính sách bán hàng" />} ></Route>
                <Route path='/warranty' element={<Infopage slug="warranty" title="Chính sách bảo hành" />} ></Route>
                <Route path="/contact" element={<Contactpage />}></Route>

                <Route path="/cart" element={<Cartpage />}></Route>
                <Route path="/login" element={<Loginpage />}></Route>
                <Route path="/register" element={<Registerpage />}></Route>
                <Route path="/forgetpassword" element={<Forgetpasswordpage />}></Route>
                <Route path='/reset/:pincode' element={<Resetpasswordpage />}></Route>

                <Route path="/profile" element={<Profilepage />}></Route>
                <Route path="/logout" element={<Loginpage />}></Route>
                <Route path='/orderlist' element={<Orderlistpage />} ></Route>
                <Route path='/productbycategory' element={<Productbycategorypage />} ></Route>
                <Route path='/productBySubCategory/:subcategory' element={<ProductSubCategory />} ></Route>


                {/* End navbar */}
            </Routes>
        )
    }
}

export default Approute