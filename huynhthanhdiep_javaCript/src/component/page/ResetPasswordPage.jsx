import React, { Component } from 'react'
import Header from '../common/Header';
import ResetPassword from '../others/ResetPassword';
import Footer from '../common/Footer';
export class ResetPasswordPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <ResetPassword />
                <Footer />
            </div>
        )
    }
}
export default ResetPasswordPage