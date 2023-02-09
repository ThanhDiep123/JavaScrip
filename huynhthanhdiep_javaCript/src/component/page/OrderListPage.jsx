import React, { Component } from 'react'
import Header from '../common/Header';
import OrderList from '../cart/OrderList';
import Footer from '../common/Footer';
export class OrderListPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <OrderList />
                <Footer />
            </div>
        )
    }
}
export default OrderListPage