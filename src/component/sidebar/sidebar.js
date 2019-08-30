
import React, {Component} from "react";
import {withRouter} from 'react-router-dom'


class Sidebar extends Component {


 render() {
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-items">
          <div className="sidebar-item">
            <button type="sidebar-button">
              {/* <img src={DashboardIcon} alt="dashboard"/> */}
                <i className="fa fa-home"></i>
            </button>
          </div>
          <div className="sidebar-item">
            <button type="sidebar-button">
              {/* <img src={IssueIcon} alt="issues"/> */}
                <i className="fa fa-bell" ></i>
            </button>
          </div>
          <div className="sidebar-item">
            <button type="sidebar-button">
              {/* <img src={CreateIcon} alt="create"/> */}
                <i className="fa fa-user"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);