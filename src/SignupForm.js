import React, { Component } from 'react';
import "./SignupForm.css";
import "./Divider.css"

const Divider = ({ children }) => {
    return (
        <div className="container">
            <div className="border" />
            <span className="content">
                {children}
            </span>
            <div className="border" />
        </div>
    );
};

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
                <form onSubmit={this.handleSubmit} className="SignupBox">

                    <h1> Signup </h1>

                    <p> Create your account</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit

                    <button> Sign up with Google </button>
                    <button> Sign up with Facebook </button>

                    <Divider>Or</Divider>

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
