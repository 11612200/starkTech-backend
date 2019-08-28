import React, { Component } from 'react';
import {connect} from 'react-redux';
import { thunk_action_creator} from "../../actions/fetchActions";
import  LoginPageComponent from '../../component/loginPageComponent/loginPageComponent';


class LoginPageContainer extends Component {
    render() {
       
        return (
            <div className="content">
                <LoginPageComponent />
            </div>
        );
    }
}

const mapStatetoProps=(state) =>{
    return {data: state.asyncReducer};
};

const mapDispatchToProps = (dispatch) => ({
    thunk_action_creator: () => dispatch(thunk_action_creator())
});

export default connect(mapStatetoProps,mapDispatchToProps)(LoginPageContainer);