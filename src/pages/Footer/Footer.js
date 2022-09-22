import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/ionicons.min.css';
import logo from './images/logo.png'


function Footer() {
    return (
        <div>
            <footer className="footer-05" >
                <div className="container">
                    <div className="row border-bottom mb-5 pb-4 align-items-center">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <img style={{ borderRadius: '50%' }} src={logo} height="100" alt="CoolBrand" /><h2 className="logo"><a href="#">iGroceries.com <span>One stop for all your needs</span></a></h2>
                        </div>
                        <div className="col-md-6 mb-md-0 mb-4 text-md-right">
                            <ul className="ftco-footer-social p-0 mb-0">
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">iGroceries</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon ion-ios-pin"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                    <li><a href="#"><span className="icon ion-ios-call"></span><span className="text">+2 392 3929 210</span></a></li>
                                    <li><a href="#"><span className="icon ion-ios-send"></span><span className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                                        <button type="submit" className="form-control submit rounded-right"><span className="sr-only">Submit</span><i className="ion-ios-send"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">Latest News</h2>
                            <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr57s0c7QOBS9hxaW0Pc59IFNeO3OaGHNXQ&usqp=CAU')"}}></a>
                                <div className="text">
                                    <h3 className="heading"><a href="#">Cleaning products added</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar"></span> Sep. 16, 2021</a></div>
                                        <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzP4Z-51Nsq0qL_IKtSBm5FKwJWuujWh7dIQ&usqp=CAU')"}}></a>
                                <div className="text">
                                    <h3 className="heading"><a href="#">Kitchen products added</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar"></span> Sep. 16, 2021</a></div>
                                        <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">Best Sellers</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="featured">
                                        <a href="#" className="img rounded mb-3" style={{backgroundImage:"url('https://newsd.in/wp-content/uploads/2018/05/fruits_veggies.jpg')"}}></a>
                                        <div className="text">
                                            <h3><a href="#">Fruits and veggie products</a></h3>
                                            <p className="rate">
                                                <a href="#"><span className="ion-ios-star"></span></a>
                                                <a href="#"><span className="ion-ios-star"></span></a>
                                                <a href="#"><span className="ion-ios-star"></span></a>
                                                <a href="#"><span className="ion-ios-star"></span></a>
                                                <a href="#"><span className="ion-ios-star"></span></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mt-5 pt-4 border-top">
                        <div className="col-md-6 col-lg-8">
                            <p className="copyright">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.</p>
                        </div>
                        <div className="col-md-6 col-lg-4 text-md-right">
                            <p className="copyright">Website developed with <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Anand Desai</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>



            <script src="js/jquery.min.js"></script>
            <script src="js/popper.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
        </div>
    )
}

export default Footer;