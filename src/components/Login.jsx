import React, { Component } from 'react'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "test@example.com",
            password: "password",
        };
    }
    render() {
        return(
            <div className='col-lg-9 p-2'>
                <h4 className="m-1 p-2 border-bottom">
                    Login
                </h4>

                {/* Email */}
                <div className="form-group form-row p-2">
                    <label htmlFor="email" className="col-lg-4">Email:</label>
                    <input name="email" type="text" className="form-control" value={this.state.email} />
                </div>

                {/* Password */}
                <div className="form-group form-row p-2">
                    <label htmlFor="password" className="col-lg-4">Password:</label>
                    <input name="password" type="password" className="form-control" value={this.state.password} />
                </div>
            </div>
        );
    }
}

export default Login;