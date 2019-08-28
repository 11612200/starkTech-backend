import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/store';
import { Router, Route ,Redirect} from 'react-router'
import App from './App'
import { createBrowserHistory } from 'history';
// import LoginPageContainer from './container/loginPageContainer/loginPageContainer'
import LoginPageComponent from './component/loginPageComponent/loginPageComponent';
import LoginPage from './component/LoginPage/LoginPage';


const history = createBrowserHistory();
export const store = configureStore();

export const route = (
    <Provider store={store}>
        <Router history={history}>
            <App id="LAYOUT" >
                <Route exact path="/" component={LoginPageComponent} id="login"/>
                <Route path="/sign-in" component={LoginPage} id="logon"/>
            </App>
        </Router>
    </Provider>
)
