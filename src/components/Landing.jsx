import React, { Component } from 'react'

class Landing extends Component {
    state = {
        pageTitle:"Hello", 
        customersCount: 5,
        customers: [
            {id: 1, name: "Scott", phone: "123-456", address: {city: "Nairobi"}, photo: "https://picsum.photos/id/1010/60"},
            {id: 2, name: "Jones", phone: "982-014", address: {city: "Kisumu"}, photo: "https://picsum.photos/id/1011/60"},
            {id: 3, name: "Allen", phone: "889-921", address: {city: "Mombasa"}, photo: "https://picsum.photos/id/1012/60"},
            {id: 4, name: "James", phone: null, address: {city: "Nairobi"}, photo: "https://picsum.photos/id/1013/60"},
            {id: 5, name: "John", phone: null, address: {city: "Nyahera"}, photo: "https://picsum.photos/id/1014/60"},
        ]
    };

    customerNameStyle = (customerName) => {
        if(customerName.startsWith('S')) return{backgroundColor: "green"};
        else if(customerName.startsWith('J')) return{backgroundColor: "red"};
        else return{};
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
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table> 
            </>
        )
    }

    onRefreshClick = () => {
        this.setState({customersCount: 0});
    };

    getPhoneToRender = (phone) => {
        // {phone ?? <span className='text-danger'>Not available</span> }
        if(phone) {
            return phone;
        } else {
            return <span className='text-danger'>Not available</span>;
        }
    };

    getCustomerRow = () => {
        return (
            this.state.customers.map(customer => {
                return (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td><img src={customer.photo} alt="customer" /></td>
                        <td style={this.customerNameStyle(customer.name)}>{customer.name}</td>
                        <td>{ this.getPhoneToRender(customer.phone) }</td>
                        <td>{customer.address.city}</td>
                    </tr>
                );
            })
        );
    };
}

export default Landing;