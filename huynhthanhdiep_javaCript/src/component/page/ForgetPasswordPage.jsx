import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header';
import ForgetPassword from '../others/ForgetPassword';
export class ForgetPasswordPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <ForgetPassword />
                <Footer />

            </div>
        )
    }
}

export default ForgetPasswordPage