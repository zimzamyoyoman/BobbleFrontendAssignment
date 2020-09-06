import React, { Component } from 'react';
import $ from 'jquery';
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
        this.state = { firstname: "", lastname: "", email: "", password: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        $.ajax({
            url: "https://reqres.in/api/users",
            type: "POST",
            data: {
                email: this.state.email,
                password: this.state.password
            },
            success: function (response) {
                console.log(response);
            }
        });
        
        this.setState({ firstname: "", lastname: "", email: "", password: "" });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="SignupBox">
                    <form onSubmit={this.handleSubmit} className="form">

                        <h5 className="title"> SIGN UP </h5>

                        <h1 className="heading"> Create your account</h1>
                        <div className="subtitle"> <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit  </small></div>

                        <div className="signupbuttons">
                            <button className="loginBtn loginBtn--google">
                                Sign up with Google
                    </button>

                            <button className="loginBtn loginBtn--facebook">
                                Sign up with Facebook
                    </button>
                        </div>


                        <Divider>or</Divider>
                        <div className="form-inputs">


                            <input
                                className="firstName"
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                            />

                            <input
                                className="lastName"
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                            />

                            <input
                                className="email"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />

                            <input
                                className="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="signUp">
                            <small> By clicking Sign Up, you agree to our <a href=""> Terms of Use </a> and our <a href=""> Privacy Policy</a>.</small>
                            <button type="submit">SIGN UP</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;
