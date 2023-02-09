import React, { Component } from 'react'
import Header from '../common/Header';
import Login from '../others/Login';
import Footer from '../common/Footer';
export class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Login />
                <Footer />
            </div>
        )
    }
}
export default LoginPage