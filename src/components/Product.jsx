import React, { Component } from "react"
class Product extends Component {
    constructor(props) {
        console.log("Constructor - Product");
        super(props);
        this.state = {
            // id: this.props.product.id,
            // productName: this.props.product.productName,
            // price: this.props.product.price,
            product: this.props.product
        }
    }
    render() {
        console.log("Render - Product");
        // console.log(this.props);
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">
                            # {this.state.product.id}
                            <span className="pull-right hand-icon" onClick={() => this.props.onDelete(this.state.product)}>
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
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

    componentDidMount() {
        console.log("componentDidMount - Product");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate - Product");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount - Product");
    }
};

export default Product;