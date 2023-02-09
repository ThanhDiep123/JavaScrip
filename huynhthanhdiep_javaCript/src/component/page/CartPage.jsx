import React, { Component } from 'react'
import Header from '../common/Header'
import Cart from '../cart/Cart';
import Footer from '../common/Footer';
export class CartPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cart/>
                <Footer />
            </div>
        )
    }
}

export default CartPage