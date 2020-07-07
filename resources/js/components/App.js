import React from 'react'
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout'
import Login from './pages/Login'

import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

const PrivateRoute = ({component, ...rest }) => {
    if (!localStorage.getItem('token')) {
        //dispatch(logoutUser());
        return (<Redirect to="/login"/>)
    } else {
        return ( // eslint-disable-line
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};

function App() {
    return (
        <Router>
            <Switch>
              <Route path='/login' component={Login} />
              <PrivateRoute path="/" component={Layout}/>
            </Switch>
        </Router>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
      </React.StrictMode>
        , document.getElementById('app'));
}
