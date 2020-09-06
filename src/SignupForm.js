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
        this.state = { firstname: "", lastname: "", email: "", password: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        this.setState({ firstname: "" });
    }

    render() {
        return (
            <div class="wrapper">
                <div className="SignupBox">
                    <form onSubmit={this.handleSubmit} className="form">

                        <h5 class="title"> SIGN UP </h5>

                        <p class="heading"> Create your account</p>
                        <div class="subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </div>

                        <div class="signupbuttons">
                            <button class="loginBtn loginBtn--google">
                                Sign up with Google
                    </button>

                            <button class="loginBtn loginBtn--facebook">
                                Sign up with Facebook
                    </button>
                        </div>


                        <Divider>Or</Divider>
                        <div class="form-inputs">


                            <input
                                class="firstName"
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                            />

                            <input
                                class="lastName"
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                            />

                            <input
                                class="email"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />

                            <input
                                class="password"
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
