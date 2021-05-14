import React, { Component } from 'react';
import MaterialForm from './Components/MaterialForm';

export class App extends Component {

  styles = {
    // marginLeft: 'auto',
    // marginRight: 'auto',
    textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center'
  };

  render() {
    return (
      <div style={this.styles}>
        <MaterialForm />
      </div>
    )
  }
}

export default App;
