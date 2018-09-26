import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './common/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render((
    <Root/>
), document.getElementById('root'));
registerServiceWorker();
