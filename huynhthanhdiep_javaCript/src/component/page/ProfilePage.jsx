import React, { Component } from 'react'
import Header from '../common/Header';
import Profile from '../others/Profile';
import Footer from '../common/Footer';
export class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Profile />
                <Footer />
            </div>
        )
    }
}
export default ProfilePage