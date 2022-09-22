import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/icomoon/style.css';
import './css/style.css'

function SignUp() {
    return (
        <div>
            <div className="d-lg-flex half">
                <div className="contents order-2 order-md-1">

                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 py-5">
                                <h3>Register</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group first">
                                                <label for="fname">First Name</label>
                                                <input type="text" className="form-control" placeholder="e.g. John" id="fname"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group first">
                                                <label for="lname">Last Name</label>
                                                <input type="text" className="form-control" placeholder="e.g. Smith" id="lname"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group first">
                                                <label for="email">Email Address</label>
                                                <input type="email" className="form-control" placeholder="e.g. john@your-domain.com" id="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group first">
                                                <label for="lname">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="+00 0000 000 0000" id="lname"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group first">
                                                <label for="lname">Website</label>
                                                <input type="text" className="form-control" placeholder="e.g. https://google.com" id="lname"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="form-group last mb-3">
                                                <label for="password">Password</label>
                                                <input type="password" className="form-control" placeholder="Your Password" id="password"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="form-group last mb-3">
                                                <label for="re-password">Re-type Password</label>
                                                <input type="password" className="form-control" placeholder="Your Password" id="re-password"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-5 mt-4 align-items-center">
                                        <div className="d-flex align-items-center">
                                            <label className="control control--checkbox mb-0"><span className="caption">Creating an account means you're okay with our <a href="#">Terms and Conditions</a> and our <a href="#">Privacy Policy</a>.</span>
                                                <input type="checkbox" checked="checked" />
                                                <div className="control__indicator"></div>
                                            </label>
                                        </div>
                                    </div>

                                    <input type="submit" value="Register" className="btn px-5 btn-primary"/>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
        </div>
    )
}

export default SignUp;
