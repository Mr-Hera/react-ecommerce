import React, { Component } from 'react';
import Product from './Product';

class ShoppingCart extends Component {
    // set up consutructor
    constructor(props) {
        console.log("constructor - ShoppingCart");
        // calling super
        super(props);

        // initialize state
        this.state = {
            products: [],
        };
    };

    // state = {
    //     products: [
    //         {id: 1, productName: "Iphone", price: 8900, quantity: 0},
    //         {id: 2, productName: "Sony Camera", price: 4500, quantity: 0},
    //         {id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0},
    //         {id: 4, productName: "Ipad Pro", price: 12400, quantity: 0},
    //         {id: 5, productName: "Xbox", price: 7780, quantity: 0},
    //         {id: 6, productName: "Dell Monitor", price: 8880900, quantity: 0},
    //     ],
    // };
    render () {
        console.log("render - ShoppingCart");
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map(product => {
                        return (
                            <Product 
                                key={product.id}
                                // id={product.id}
                                // productName={product.productName}
                                // price={product.price}
                                product={product}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            >
                                <button className="btn btn-primary">Buy Now</button>
                            </Product>
                        );
                    })}
                </div>
            </div>
        );
    }

    // executes after constructor & render methods(including child components life cycle phases) of current component
    componentDidMount = async() => {
        console.log("componentDidMount - ShoppingCart");
        // here you fetch data from data source/ API calls
        let response = await fetch(" http://localhost:5000/products", { method: "GET" });
        let products = await response.json();
        this.setState({ products: products });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate - ShoppingCart", prevProps, prevState, this.props, this.state);

        // if(prevProps.x != this.props.x) {
            // make http call
        // };
    }

    componentWillUnmount() {
        console.log("componentWillUnmount - ShoppingCart");
    }

    // componentDidCatch(error, info) {
    //     console.log("componentDidCatch - ShoppingCart", error, info);
    //     localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
    // }

    // executes when user clicks the + button
    handleIncrement = (product, maxValue) => {
        // clone products state array
        let allProducts = [...this.state.products];
        // find index of current product toggled
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity < maxValue) {
            // update current product quantity
            allProducts[index].quantity++;
        };
        

        // update products state
        this.setState({ products: allProducts });
    };

    // executes when user clicks the - button
    handleDecrement = (product, minValue) => {
        // clone products state array
        let allProducts = [...this.state.products];
        // find index of current product toggled
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity >  minValue) {
            // update current product quantity
            allProducts[index].quantity--;
        };

        // update products state
        this.setState({ products: allProducts });
    };

    // handles deleting of a product
    handleDelete = (product) => {
        // clone products state array
        let allProducts = [...this.state.products];
        // find index of current product toggled
        let index = allProducts.indexOf(product);

        if(window.confirm("Are you sure?")) {
            // delete product
            allProducts.splice(index, 1);
    
            // update products state
            this.setState({ products: allProducts });
        };
    }
}

export default ShoppingCart;