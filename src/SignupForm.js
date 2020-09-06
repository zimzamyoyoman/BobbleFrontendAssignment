// Import Statements
import React, { Component } from 'react';
import $ from 'jquery';
import "./SignupForm.css";
import "./Divider.css"

// Lines for Divider (------------- or ---------------)
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

// Class for SignUpForm
class SignupForm extends Component {
    constructor(props) {
        super(props);
        // State contains data from form input fields
        this.state = { firstname: "", lastname: "", email: "", password: "" };
        // Method bindings
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handles input changes in form
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    // Handles form submission
    handleSubmit(evt) {
        // Prevent default reload behaviour on form submission
        evt.preventDefault();

        // Send post request to ReqRes using AJAX
        $.ajax({
            url: "https://reqres.in/api/users",
            type: "POST",
            data: {
                email: this.state.email,
                password: this.state.password
            },
            success: function (response) {
                // Print response to console
                console.log(response);
            }
        });

        // Clear state
        this.setState({ firstname: "", lastname: "", email: "", password: "" });
    }

    render() {
        return (
            // Container div for sign up box
            <div className="SignupBox">
                {/* Sign Up Form */}
                <form onSubmit={this.handleSubmit} className="form">

                    {/* SIGN UP Title */}
                    <h5 className="title"> SIGN UP </h5>
                    {/* CREATE YOUR ACCOUNT Heading */}
                    <h1 className="heading"> Create your account</h1>
                    {/* Subtitle */}
                    <div className="subtitle"> <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit  </small></div>

                    {/* Sign Up Buttons for Google and Facebook */}
                    <div className="signupbuttons">
                        <button className="loginBtn loginBtn--google">
                            Sign up with Google
                            </button>

                        <button className="loginBtn loginBtn--facebook">
                            Sign up with Facebook
                            </button>
                    </div>

                    {/* Divider (----------or------------) */}
                    <Divider>or</Divider>

                    {/* Form Input Fields */}
                    <div className="form-inputs">

                        {/* First Name */}
                        <input
                            className="firstName"
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            required
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />

                        {/* Last Name */}
                        <input
                            className="lastName"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            required
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />

                        {/* Email */}
                        <input
                            className="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        />

                        {/* Password */}
                        <input
                            className="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    {/* Sign Up Button Container */}
                    <div className="signUp">
                        {/* Sign Up Button Subtitle */}
                        <small> By clicking Sign Up, you agree to our <a href=""> Terms of Use </a> and our <a href=""> Privacy Policy</a>.</small>
                        {/* Sign Up Button */}
                        <button type="submit">SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;
