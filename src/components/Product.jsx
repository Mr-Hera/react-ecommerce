import React, { Component } from "react"

class Product extends Component {
    state = {
        // id: this.props.product.id,
        // productName: this.props.product.productName,
        // price: this.props.product.price,
        product: this.props.product
    }
    render() {
        console.log(this.props);
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted"># {this.state.product.id}</div>
                        <h5 className="pt-5 border-top">+ {this.state.product.productName}</h5>
                        <div>${this.state.product.price}</div>
                    </div>
                    <div className="card-footer text-right">
                        <div className="float-left">
                            <span className="badge bg-dark m-1">
                                {this.state.product.quantity}
                            </span>
                            <div className="btn-group  m-1">
                                <button className="btn btn-outline-success" onClick={() => {this.props.onIncrement(this.state.product,10);}}>
                                    +
                                </button>
                                <button className="btn btn-outline-success" onClick={() => {this.props.onDecrement(this.state.product,0);}}>
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="float-right">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Product;