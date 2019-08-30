import React, {Component} from 'react';
import './LoginPage.css';
import {thunk_action_creator} from '../../action/fetchActions';
import HeadingLogo from '../../Image/Icons/heading-logo.png'
import BodyLogo from '../../Image/Icons/body-image.png'

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        this.setState({});
    }

    handleEditChange = event => {
        //console.log("event: ", event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    postData=()=> {
        console.log("data here", this.state, this.state.email_id, this.state.password)
        thunk_action_creator(JSON.stringify(this.state));
    }

    render()
    {
        console.log("suno")
        return(
            <div className="row" style={{display: 'flex', marginTop: 50}}>
                <div className="col-9">
                    <img alt="body-logo" src={BodyLogo}/>
                </div>
                <div className="col-3" style={{backgroundColor: 'white', height: 210, borderRadius: 10, marginTop: 300, width: 340, marginLeft: 70}}>
                    <div><img alt="heading-logo" src={HeadingLogo}  /></div>
                    <input type="text" placeholder="&nbsp;&nbsp;Email" className="inputClass" name="email_id"   onChange={this.handleEditChange}/>
                    <input type="password" placeholder="&nbsp;&nbsp;Password" className="inputClass" name="password"   onChange={this.handleEditChange}/>
                    <button className="buttonClass" style={{backgroundColor: "#193382", color: "white"}} type="button"  onClick={this.postData}>
                        Login
                    </button>
                    &nbsp;&nbsp;<a href="/">Sign Up</a>
                </div>
            </div>
        )
    }
}

export default LoginPage;