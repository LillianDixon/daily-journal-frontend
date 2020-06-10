import React, { Component } from 'react';

import SignUp from "../auth/signup"

export default class Register extends Component {
    constructor(props){
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
    }
    
    handleSuccessfulAuth(){
        this.props.handleSuccessfulLogin();
        this.props.history.push('/');
    }

    handleUnSuccessfulAuth(){
        this.props.handleUnSuccessfulLogin(); 
    }

    render() {
        return (
            <div>
                <SignUp
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                    history = {this.props.history}
                />
            </div>
        );
    }
}