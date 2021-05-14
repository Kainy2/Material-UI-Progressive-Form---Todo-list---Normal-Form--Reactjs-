import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class MaterialUserDetails extends Component {
  state = {
    value: ''
  }

  next = (e) => {
      if (this.props.fn == '' || this.props.ln == '' || this.props.email == '' ) {
        return false
      } else {
        
        e.preventDefault;
        this.props.nextPage();
      }
    };


    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div>
                        <AppBar title="User Details" />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange={this.props.inputName("fn")}
                            defaultValue={this.props.fn}
                            required={true}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={this.props.inputName("ln")}
                            defaultValue={this.props.ln}
                            required={true}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Email"
                            floatingLabelText="Email"
                            name="email"
                            onChange={this.props.inputName("email")}
                            defaultValue={this.props.email}
                            required={true}
                        />
                        <br />
                        <RaisedButton
                            label="Continue"
                            onClick={this.next}
                            style={styles}
                        />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    marginTop: "20px",
};

export default MaterialUserDetails;
