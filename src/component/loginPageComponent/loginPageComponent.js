import React, {Component} from 'react';
import './loginPageComponent.css';
//import {thunk_action_creator} from '../../action/fetchActions';
import HeadingLogo from '../../Image/Icons/heading-logo.png'
import BodyLogo from '../../Image/Icons/body-image.png'
import {thunk_action_creator} from '../../action/fetchActions';
import {connect} from 'react-redux';

class LoginPageComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {loginData:{},};
    }

    async componentDidMount() {
        this.setState({});
    }

    // handleEditChange = event => {
    //     //console.log("event: ", event.target.name, event.target.value);
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     });
    // };

    onChange=(event,name)=>{
      
        const loginData ={...this.state.loginData};
        loginData[name]=event.target.value;
        this.setState({
            loginData
        });

    }

    onSubmit=()=>{

        const loginData={...this.state.loginData}
        delete loginData.confirmPassword;
        this.props.thunk_action_creator(loginData);
    }

    

// postData=()=> {
//     console.log("data here", this.state, this.state.UserDetails, this.state.UserDetails)
//     if(this.state.confirm_password === this.state.password) {
//         console.log("Password Matched");
//          //thunk_action_creator(JSON.stringify(this.state));
//         //  this.setState( {
//         //      "encryptedPass": this.state.password,
//         //      "email": this.state.email,
//         //      "dob": this.state.dob,
//         //      "designation": this.state.designation,
//         //      "username": this.state.username
//         //  });
//         var dt = {
//             "encryptedPass": this.state.password,
//             "email": this.state.email_id,
//             "dob": new Date(this.state.dob),
//             "designation": this.state.designation,
//             "username": this.state.full_name
//         };
//         console.log(JSON.stringify(dt));
//         // fetch("https://localhost:8080/users", {
//         //     method: "POST",
//         //     headers: {
//         //         "Content-Type": "application/json"
//         //     },
//         //     body: JSON.stringify( dt )
//         // }).then(
//         //     (res) => {
//         //         res.json();
//         //         alert("updated");
//         //     }
//         // ).catch( err=> {
//         //     console.log(err);
//         //     alert("SOmething Went wrong.");
//         // } )
        
//         fetch('https://localhost:8080/allusers')
//         .then(response =>  response.json())
//         .then(resData => {
//         //console.log(JSON.stringify(resData))
//         //do your logic here       
//         //let person = resData.results
//         console.log(resData);
//         //this.setState({ person: resData.results }); //this is an asynchronous function
//         })
//     } else {
//         console.log("need to take action");
//     }
//     // this.props.thunk_action_creator(JSON.stringify(data));
// }

render()
{
    return(
        <div className="row" style={{display: 'flex', marginTop: 50}}>
            <div className="col-9">
                <img alt="body-logo" src={BodyLogo}/>
            </div>
            {/* <div className="col-3" style={{backgroundColor: 'white', height: 400, borderRadius: 10, marginTop: 150, width: 340, marginLeft: 70}}>
                <div><img alt="heading-logo" src={HeadingLogo}  /></div>
                <input type="text" placeholder="&nbsp;&nbsp;Full Name" className="inputClass" name="full_name"   onChange={this.handleEditChange}/>
                <input type="text" placeholder="&nbsp;&nbsp;Email Id" className="inputClass" name="email_id"   onChange={this.handleEditChange}/>
                <input type="text" placeholder="&nbsp;&nbsp;Designation" className="inputClass" name="designation"   onChange={this.handleEditChange}/>
                <input type="text" placeholder="&nbsp;&nbsp;Date Of Birth" className="inputClass" name="dob"   onChange={this.handleEditChange}/>
                <input type="password" placeholder="&nbsp;&nbsp;Password" className="inputClass" name="password"   onChange={this.handleEditChange}/>
                <input type="password" placeholder="&nbsp;&nbsp;Confirm Password" className="inputClass" name="confirm_password" onChange={this.handleEditChange}/>
                <button className="inputClass" style={{backgroundColor: "#193382", color: "white"}} type="button"  onClick={this.postData}>
                    Sign Up
                </button>
            </div> */}


            <div className="col-3" style={{backgroundColor: 'white', height: 400, borderRadius: 10, marginTop: 150, width: 340, marginLeft: 70}}>
                <div><img alt="heading-logo" src={HeadingLogo}  /></div>
                <input type="text" placeholder="&nbsp;&nbsp;Full Name" className="inputClass" name="full_name"   onChange={(event)=> this.onChange(event,'username')}/>
                <input type="text" placeholder="&nbsp;&nbsp;Email Id" className="inputClass" name="email_id"   onChange={(event)=> this.onChange(event,'emailID')}/>
                <input type="text" placeholder="&nbsp;&nbsp;Designation" className="inputClass" name="designation"    onChange={(event)=> this.onChange(event,'designation')}/>
                <input type="text" placeholder="&nbsp;&nbsp;Date Of Birth" className="inputClass" name="dob"    onChange={(event)=> this.onChange(event,'dob')}/>
                <input type="password" placeholder="&nbsp;&nbsp;Password" className="inputClass" name="password" onChange={(event)=> this.onChange(event,'encryptedPass')}  />
                <input type="password" placeholder="&nbsp;&nbsp;Confirm Password" className="inputClass" name="confirm_password" onChange={(event)=> this.onChange(event,'ConfirmPassword')}/>
                <button className="buttonClass" style={{backgroundColor: "#193382", color: "white"}} type="button"  onClick={this.onSubmit}>
                    Sign Up
                </button>
                &nbsp;&nbsp;<a href="/sign-in">Log In</a>
            </div>


        </div>
    )

}
        

    
}


const mapStatetoProps=(state) =>({
    loginData:state.asyncReducer.loginData
});

const mapDispatchToProps = dispatch => ({
    thunk_action_creator: loginData => dispatch(thunk_action_creator(loginData))
});

export default connect(mapStatetoProps,mapDispatchToProps)(LoginPageComponent);


// export default LoginPageComponent;