import React, {Component} from 'react';
import './App.css';
//import Sidebar from './component/sidebar/sidebar'
//import LoginPageComponent from './component/loginPageComponent/loginPageComponent';

class App extends Component {
  render() {
    return (
      <div>
         <div style={{ backgroundColor: 'black', justifyContent: 'center'}} >
            <div className='App'>
              {this.props.children}
            </div>
        </div>
      </div>
     );
  }
}

export default App;
