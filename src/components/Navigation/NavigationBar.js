import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import './css/style.css';
import 'font-awesome/css/font-awesome.min.css';



const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'70px'}}>
                <a href="#" className="navbar-brand">
                    <img style={{ borderRadius: '50%' }} src={logo} height="80" alt="CoolBrand" />
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse2">
                    <div className="navbar-nav">
                        <a  href="/" className="nav-item nav-link active h4">Home</a>
                        <a href="/about-us" className="nav-item nav-link h4">About</a>
                        <a href="/products" className="nav-item nav-link h4">Products</a>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <i class="fa fa-shopping-cart fa-2x" style={{marginRight:'8px'}}aria-hidden="true"></i>
                    <a href="/login" className="btn btn-primary h4">Sign-in</a>
                    <a href='/sign-up' className="btn btn-primary me-3 h4">Register</a>
                    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                </div>
            </nav >

        </div >
    )
}

export default NavigationBar
