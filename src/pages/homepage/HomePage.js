import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="First slide" />
          <Carousel.Caption>
                <a href="/food-products" className="btn btn-primary">Explore Food Products</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Second slide"/>
          <Carousel.Caption>
                 <a href="/snack-products" className="btn btn-primary">Explore Snack Products</a>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Third slide"/>
          <Carousel.Caption>
                <a href="/fruitsNVeggies-products" className="btn btn-primary">Explore Fruits,Veggie Products</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Third slide"/>
          <Carousel.Caption>
               <a href="/beverage-product" className="btn btn-primary">Explore Beverage Products</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1581515286348-98549702050f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Third slide"/>
          <Carousel.Caption>
               <a href="/bakeryCakesAndDairy" className="btn btn-primary">Explore Bakery,Cakes and Dairy Products</a>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default HomePage;
