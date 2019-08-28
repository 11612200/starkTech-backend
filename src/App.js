import React, {Component} from 'react';
import './App.css';
// import LoginPageComponent from './component/loginPageComponent/loginPageComponent';

class App extends Component {
  render() {
    return (
      <div>
        <div className='App' style={{backgroundColor: 'black'}}>
          {/* <LoginPageComponent/> */}
          {this.props.children}
        </div>
      </div>
     );
  }

}

export default App;
