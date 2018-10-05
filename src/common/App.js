import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Header from './Header'
import Footer from "./Footer"
import Main from "./Main";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                confirm_password: '',
            }
        };
    }

    handleUsernameChanged = (username) => {
        let user = this.state.user;
        user.username = username;
        this.setState({
            user: user
        });
    };

    handleEmailChanged = (email) => {
        let user = this.state.user;
        user.email = email;
        this.setState({
            user: user
        });
    };

    handleFirstNameChanged = (first_name) => {
        let user = this.state.user;
        user.first_name = first_name;
        this.setState({
            user: user
        });
    };

    handleLastNameChanged = (last_name) => {
        let user = this.state.user;
        user.last_name = last_name;
        this.setState({
            user: user
        });
    };

    handlePasswordChanged = (password) => {
        let user = this.state.user;
        user.password = password;
        this.setState({
            user: user
        });
    };

    handleConfirmPasswordChanged = (confirm_password) => {
        let user = this.state.user;
        user.confirm_password = confirm_password;
        this.setState({
            user: user
        });
    };

    render() {
        return (
            <React.Fragment>
            <Header/>
            <Main
                user={this.state.user}
                onUsernameChanged={this.handleUsernameChanged}
                onEmailChanged={this.handleEmailChanged}
                onFirstNameChanged={this.handleFirstNameChanged}
                onLastNameChanged={this.handleLastNameChanged}
                onPasswordChanged={this.handlePasswordChanged}
                onConfirmPasswordChanged={this.handleConfirmPasswordChanged}
            />
            <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
