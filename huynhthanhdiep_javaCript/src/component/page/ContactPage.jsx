import React, { Component } from 'react'
import Header from '../common/Header'
import Contact from '../others/Contact';
import Footer from '../common/Footer';
export class ContactPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default ContactPage