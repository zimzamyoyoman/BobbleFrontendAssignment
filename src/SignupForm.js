import React, { Component } from 'react';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { firstname: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ firstname: evt.target.value });
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
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button> SIGN UP </button>
                </form>
            </div>
        )
    }
}

export default SignupForm;
