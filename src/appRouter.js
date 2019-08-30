import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/store';
import { Router, Route } from 'react-router'
import App from './App'
import { createBrowserHistory } from 'history';
// import LoginPageContainer from './container/loginPageContainer/loginPageContainer'
import LoginPageComponent from './component/loginPageComponent/loginPageComponent';
import LoginPage from './component/LoginPage/LoginPage';
import HomePage from './component/homepage/homepage';

const history = createBrowserHistory();
export const store = configureStore();

export const route = (
    <Provider store={store}>
        <Router history={history}>
            <App id="LAYOUT" >
                <Route exact path="/" component={LoginPageComponent} id="signup"/>
                <Route path="/sign-in" component={LoginPage} id="login"/>
                <Route path="/home" component={HomePage} id="home"/>
            </App>
        </Router>
    </Provider>
)
