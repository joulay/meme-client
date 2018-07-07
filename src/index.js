import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import store from './store';
import App from './components/App';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider>
                <App/>
           </MuiThemeProvider>
        </Router>
</Provider>, document.getElementById('root'));