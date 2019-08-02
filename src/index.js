import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';
//import RegisterForm from './registrationForm/RegisterForm.js';
//import Yo from './yo'
//import CustomerDetail from './customerDetails/customerDetails'
//import ServiceProviderDetails from './serviceProvider/serviceProviderDetails'

import LoginPage from './login/loginPage'
//import NewOrder from './newOrder/newOrder'


ReactDOM.render((<Router><LoginPage/></Router>), document.getElementById('root'));
//ReactDOM.render(<LoginPage/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
