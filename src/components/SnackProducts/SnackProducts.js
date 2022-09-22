import { React, Component} from "react";
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class SnackProducts extends Component {
	constructor() {
		super();
		this.state = {
			snackProducts: []
		}
	};
	componentDidMount() {
		this.fetchProducts();

	}
	fetchProducts=()=>{
		fetch("http://localhost:3000/snackProducts.json").then(response => response.json()).then(items => this.setState({ snackProducts: items }));
		console.log(this.state.snackProducts);
	}
	filterProducts = (e) => {
		if(e.target.value==''){
			this.fetchProducts();
		}else{
			this.setState({
				snackProducts: this.state.snackProducts.filter(product => product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
			})
		}
		
	}

	render() {

		return (
			<div className="App">
				<section className="section-products">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-md-8 col-lg-6">
								<div className="header">
									<h2>Snack Products</h2>
								</div>
							</div>
						</div>
						<div>
							<form className="d-flex ms-auto">
								<input type="text" className="form-control me-sm-2" placeholder="Search Snacks" onChange={this.filterProducts} />
							</form>
							<br/>
						</div>
						<div className="row">
							{this.state.snackProducts.map(product => (
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div id="product-i" className="single-product">
										<div key={product.id} className="part-2">
											<img src={product.pimg} alt={product.name} />
											<h3 className="product-title">{product.name}</h3>
											<div className="d-flex flex-row user-ratings">
												<div className="ratings">
													<i className="fa fa-star icon"></i>
													<i className="fa fa-star icon"></i>
													<i className="fa fa-star icon"></i>
													<i className="fa fa-star icon"></i>
												</div>
												<h6 className="text-muted ml-1">4/5</h6>
											</div>
											<h4 className="product-old-price">Rs79.99</h4>
											<h4 className="product-price">Rs.{product.price}</h4>

											<button className="btn btn-danger">Add to cart</button>
										</div>


									</div>
								</div>
							)
							)
							}
						</div>
					</div>
				</section>
			</div>

		);
	}

}
export default SnackProducts; 