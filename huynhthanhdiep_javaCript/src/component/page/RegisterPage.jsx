import React, { Component } from 'react'
import Header from '../common/Header';
import Register from '../others/Register';
import Footer from '../common/Footer';
export class RegisterPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Register />
                <Footer />
            </div>
        )
    }
}
export default RegisterPage