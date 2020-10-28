import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom'
import logo from './logos/logo.jpg';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="col-11 col-sm-11 col-md-10 col-lg-8 col-xl-8 mx-auto p-3 border-bottom">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ borderRadius: "50px" }}>
                        <img src={logo} style={{ width: 100, marginRight: 30 }} alt="LOGO" />
                        <Link style={{ fontSize: "30px" }} className="navbar-brand" to="/">MB FILMS</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto px-2">
                                <li className="nav-item">
                                    <Link className="nav-link clr" style={{ textAlign: "center" }} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link clr" style={{ textAlign: "center" }} to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link clr" style={{ textAlign: "center" }} to="/photography">photography</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link clr" style={{ textAlign: "center" }} to="/clients">clients Images</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link clr" style={{ textAlign: "center" }} to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;