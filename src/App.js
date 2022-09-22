
import './App.css';
import React, { Component } from 'react';
import NavigationBar from './components/Navigation/NavigationBar';
import AboutUs from './pages/about-us/AboutUs';
import HomePage from './pages/homepage/HomePage';
import Footer from './pages/Footer/Footer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Products from './pages/Products/Products';
import Product from './components/Product/Product';
import SnackProducts from './components/SnackProducts/SnackProducts';
import FruitsNVeggie from './components/fruitsNVeggieProducts/FruitNVeggie';
import BeverageProduct from './components/BeverageProducts/BeverageProduct';
import BakeryCakesAndDairy from './components/BakeryCakesAndDairy/BakeryCakesAndDairy';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

class App extends Component {
    constructor(){
        super();

    }
    render(){
        return (
            <div>
                <NavigationBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/about-us'} element={<AboutUs/>}/>
                        <Route path={'/products'} element={<Products/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/sign-up'} element={<SignUp/>}/>
                        <Route path={'/food-products'} element={<Product/>}/>
                        <Route path={'/snack-products'} element={<SnackProducts/>}/>
                        <Route path={'/fruitsNVeggies-products'} element={<FruitsNVeggie/>}/>
                        <Route path={'/beverage-product'} element={<BeverageProduct/>}/>
                        <Route path={'/bakeryCakesAndDairy'} element={<BakeryCakesAndDairy/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </div>           
             
             );
    }
    
  }
  
  export default App;
