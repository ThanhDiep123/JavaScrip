import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <header id="header">

                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><a href="#st"><i className="fa fa-phone"></i> 1414141414</a></li>
                                        <li><a href="#st"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><a href="https://www.facebook.com/thanh.diep.33234571"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#st"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#st"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#st"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#st"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="logo pull-left item">Logo</div>
                            </div>
                            <div className="col-sm-8">
                                <div className="shop-menu pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><Link to ='/cart'><i className="fa fa-shopping-cart"></i> Cart</Link></li>
                                        <li><Link to ='/login'><i className="fa fa-lock"></i> Login</Link></li>
                                        <li><Link to = '/register' ><i className="fa fa-sign-in"></i> Register</Link></li>
                                        <li><Link to = '/profile'><i className="fa fa-user"></i> Profile</Link></li>
                                        <li><Link to = '/logout'><i className="fa fa-sign-out"></i> Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button></div>
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><Link to ='/'>Home</Link></li>
                                        <li><Link to ='/product'>Products</Link></li>
                                        <li><Link to ='/about'>About us</Link></li>
                                        <li><Link to ='/policy'>Policy</Link></li>
                                        <li><Link to ='/warranty'>Warranty</Link></li>
                                        <li><Link to='/Contact'>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="search_box pull-right">
                                    <input type="text" placeholder="Search" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header