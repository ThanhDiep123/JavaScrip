import React, { Component } from 'react'
import Footer from '../common/Footer'
import Info from '../common/Info'
import Header from '../common/Header'

export class InfoPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Info slug={this.props.slug} title={this.props.title} />
                <Footer />
            </div>
        )
    }
}

export default InfoPage
