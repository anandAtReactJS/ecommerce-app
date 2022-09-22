import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Products() {
    return (
        <div>
            <br/><br/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img style={{height:'210px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcq8nJCF4vcYijS7swtWMVjakeNNwA1o-Lf_SJf2LynO5sYOjAIUsHSS7J7UiCUIR7Ow&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Food Products</h5>
                            <p className="card-text">Shop all our food products by clicking on the link below.</p>
                            <Link to="/food-products" className="btn btn-primary">Explore Food Products</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img style={{height:'210px'}} src="https://rfssh.files.wordpress.com/2015/04/snacks.jpg" className="card-img-top"
                            alt="Snacks" />
                        <div className="card-body">
                            <h5 className="card-title">Snack Products</h5>
                            <p className="card-text">Shop all our snack products by clicking on the link below.</p>
                            <Link to="/snack-products" className="btn btn-primary">Explore Snack Products</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img style={{height:'210px'}} src="https://www.verywellfit.com/thmb/g33TGiWOldzBr5QjZPTXvOMnBtA=/1885x1414/smart/filters:no_upscale()/colorfulfruitsandvegetables-ddf6c1ae7ad74d72866f5f64fe3118aa.jpg" className="card-img-top"
                            alt="Fruits" />
                        <div className="card-body">
                            <h5 className="card-title">Fruits & Vegetables</h5>
                            <p className="card-text">Shop all our Fruits and Vegetables by clicking on the link below.</p>
                            <Link to='/fruitsNVeggies-products' className="btn btn-primary">Explore Fruits And Veggie Products</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img style={{height:'210px'}} src="https://5.imimg.com/data5/SELLER/Default/2020/10/NP/NQ/FF/115160227/q-500x500.png" className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Beverage Products</h5>
                            <p className="card-text">Shop all our Beverage Products by clicking on the link below.</p>
                            <Link to='/beverage-product' className="btn btn-primary">Explore Beverage Products</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img style={{height:'210px'}} src="https://cdn2.vectorstock.com/i/1000x1000/20/01/bakery-and-dairy-products-vector-35712001.jpg" className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Bakery,Cakes And Dairy Products</h5>
                            <p className="card-text">Shop all our Bakery,Cakes And Dairy Products by clicking on the link below.</p>
                            <Link to='/bakeryCakesAndDairy' className="btn btn-primary">Explore Bakery,Cakes And Dairy Products</Link>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Products
