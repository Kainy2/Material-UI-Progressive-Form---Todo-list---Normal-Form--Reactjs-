import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class MaterialSuccess extends Component {

  prev = (e) => {
    e.preventDefault;
    this.props.prevPage();
  };


  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Success' />
          <h1 style={styles}> Your Details Have Been Submitted Successfully! </h1>
          <RaisedButton label='Back' style={{marginTop: '20px'}} onClick={this.prev} />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles = {
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  color: 'lightgreen',
}
export default MaterialSuccess
