import React, { Component } from 'react';
import axios from "axios";

export default class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:"",
            email:"",
            password:"",
            passwordCheck:"",
            errorText:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
          errorText: ""
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.state.password === this.state.passwordCheck ? (
            axios.post('http://127.0.0.1:5000/register', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            },
            {
                headers:{
                    "content-type": 'application/json',
                }
            }
            ).then (response => {
                console.log('register response', response)
                if(response.data === 'Created')
                this.props.handleSuccessfulAuth()
            })
        ): this.setState({errorText: "Passwords do not match"})
    }

    render() {
        return (
            <div className="signup-wrapper">
                <h1>Sign Up</h1>
                <h2>{this.state.errorText}</h2>
                <form onSubmit={this.handleSubmit}>
                                
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
            
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
            
                    
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="password" 
                        name="passwordCheck"
                        placeholder="Re-enter your password"
                        value={this.state.passwordCheck}
                        onChange={this.handleChange}
                    />
            
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}