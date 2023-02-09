import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header';
import Featured from '../home/Featured';
import NewArrival from '../home/NewArrival';
import Slider from '../home/Slider';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <NewArrival />
                <Featured />
                <Footer />

            </div>
        )
    }
}

export default HomePage
