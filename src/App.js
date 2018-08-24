import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'

class App extends Component {
    render() {
        return (
            <div className="page">
                <Header className="page__header" />
            </div>
        );
    }
}

export default App;
