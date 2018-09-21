import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Header from './Header'
import Footer from "./Footer"
import Main from "./Main";


class App extends Component {

    render() {
        return (
            <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
