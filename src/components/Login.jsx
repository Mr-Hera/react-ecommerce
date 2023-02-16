import React, { Component } from 'react'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
        };
    }

    render() {
        return(
            <div className='col-lg-9 p-2'>
                <h4 className="m-1 p-2 border-bottom">
                    Login
                </h4>

                {this.state.message}

                {/* Email */}
                <div className="form-group form-row p-2">
                    <label htmlFor="email" className="col-lg-4">Email:</label>
                    <input name="email" type="text" className="form-control" value={this.state.email} onChange={(e) => {this.setState({ email: e.target.value })}} />
                </div>

                {/* Password */}
                <div className="form-group form-row p-2">
                    <label htmlFor="password" className="col-lg-4">Password:</label>
                    <input name="password" type="password" className="form-control" value={this.state.password} onChange={(e) => {this.setState({ password: e.target.value })}} />
                </div>

                <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
                    Login
                </button>
            </div>
        );
    }

    onLoginClick = async() => {
        // console.log(this.state);
        let response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"});
        let body = await response.json();
        console.log(body);
        
        if(body.length > 0) {
            // success message
            this.setState({
                message: (
                    <span className="text-success">"Login Successful!"</span>
                ),
            });
        } else {
            // error message
            this.setState({
                message: (
                    <span className="text-danger">"Login Failed!"</span>
                ),
            });
        }
    }
}

export default Login;