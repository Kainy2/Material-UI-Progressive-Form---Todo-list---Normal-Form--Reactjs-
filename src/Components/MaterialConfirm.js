import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class MaterialConfirm extends Component {
  next = (e) => {
    e.preventDefault;
    this.props.nextPage();
  };
  prev = (e) => {
    e.preventDefault;
    this.props.prevPage();
  };

  
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title = 'Confirmation' />
          <h1 style={styles.header}>Are You Sure You Are Done?</h1>

          <RaisedButton label="Continue" onClick={this.next} style={styles.continue} />
          <RaisedButton label='Back' onClick={this.prev} />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  header: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
},
      
  continue: {
    marginTop: "20px",
    marginRight: '30px',
    
  }

};


export default MaterialConfirm
