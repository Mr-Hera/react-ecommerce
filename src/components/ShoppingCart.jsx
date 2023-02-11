import React, { Component } from 'react';
import Product from './Product';

class ShoppingCart extends Component {
    state = {
        products: [
            {id: 1, productName: "Iphone", price: 8900, quantity: 0},
            {id: 2, productName: "Sony Camera", price: 4500, quantity: 0},
            {id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0},
            {id: 4, productName: "Ipad Pro", price: 12400, quantity: 0},
            {id: 5, productName: "Xbox", price: 7780, quantity: 0},
            {id: 6, productName: "Dell Monitor", price: 8880900, quantity: 0},
        ],
    };
    render () {
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
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ShoppingCart;