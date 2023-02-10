import React, { Component } from 'react'

class Landing extends Component {
    state = {
        pageTitle:"Hello", 
        customersCount: 5,
        customers: [
            {id: 1, name: "Scott", phone: "123-456", address: {city: "Nairobi"}},
            {id: 2, name: "Jones", phone: "982-014", address: {city: "Kisumu"}},
            {id: 3, name: "Allen", phone: "889-921", address: {city: "Mombasa"}},
            {id: 4, name: "James", phone: "552-901", address: {city: "Nairobi"}},
            {id: 5, name: "John", phone: "781-778", address: {city: "Nyahera"}},
        ]
    };
    render() {
        return(
            <>
                <h1 className=' border-bottom m-1 p-1'>
                    { this.state.pageTitle }
                    <span className="bg-dark -p-3 badge badge-secondary m-2">{this.state.customersCount}</span>
                    <button className="m-1 btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h1> 
                <table className='table m-2'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map(customer => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.address.city}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> 
            </>
        )
    }

    onRefreshClick = () => {
        this.setState({customersCount: 0});
    }
}

export default Landing;