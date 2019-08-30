
import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import Logo from "../../Image/Icons/heading-logo.png";

class Sidebar extends Component {


 render() {
    return (
      <div className="header" style={{backgroundColor: "white"}}>
        <div className="row" style={{display: "flex"}}>
            <div className="col-3">
                <img alt="logo" src={Logo}/>
            </div>
            <div className="col-9">
                <input placeholder="&nbsp;&nbsp;Search" style={{height: "50px", width: "900px"}}/>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);