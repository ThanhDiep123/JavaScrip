import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Service</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href="#st">Online Help</a></li>
                                        <li><Link to ='/contact'>Contact Us</Link></li>
                                        <li><Link to ='/oderlist'>Order Status</Link></li>
                                        <li><a href="#st">Change Location</a></li>
                                        <li><a href="#st">FAQ’s</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href="#st">T-Shirt</a></li>
                                        <li><a href="#st">Mens</a></li>
                                        <li><a href="#st">Womens</a></li>
                                        <li><a href="#st">Gift Cards</a></li>
                                        <li><a href="#st">Shoes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Policies</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href="#st">Policy</a></li>
                                        <li><a href="#st">Warranty</a></li>
                                        <li><a href="#st">Refund Policy</a></li>
                                        <li><a href="#st">Billing System</a></li>
                                        <li><a href="#st">Ticket System</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>About POST</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link to ='/about'>About us</Link></li>
                                        <li><a href="#st">Careers</a></li>
                                        <li><a href="#st">Store Location</a></li>
                                        <li><a href="#st">Affillate Program</a></li>
                                        <li><a href="#st">Copyright</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-offset-1">
                                <div className="single-widget">
                                    <h2>About POST</h2>
                                    <form action="#st" className="searchform">
                                        <input type="text" placeholder="Your email address" /><button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
                                        <p>Get the most recent updates from <br />our site and be updated your self...</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <p className="pull-left">Copyright © 2020 THERICH-SHOP Inc. All rights reserved.</p>
                            <p className="pull-right">Designed by <span><a target="_blank" href="#st">Therichpost</a></span></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer