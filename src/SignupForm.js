import React, { Component } from 'react';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { firstname: "", lastname:"", email:"", password:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    
    handleSubmit(evt) {
        this.setState({ firstname: ""});
    }

    render() {
        return (
            <div> 
                <h1> Signup </h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <button> SIGN UP </button>
                </form>
            </div>
        )
    }
}

export default SignupForm;
