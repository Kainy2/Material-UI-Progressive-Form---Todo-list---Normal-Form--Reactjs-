import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class MaterialPersonalDetails extends Component {
    next = (e) => {
        if (this.props.occupation == "" || this.props.university == "") {
            return false;
        } else { 
            e.preventDefault;
            this.props.nextPage();
        }
    };

    prev = (e) => {
        if (this.props.occupation == "" || this.props.university == "") {
            return false;
        } else {
            e.preventDefault;
            this.props.prevPage();
        }
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Personal Details"  />
                    <TextField
                        hintText="Enter your Occupation"
                        floatingLabelText="Occupation"
                        onChange={this.props.inputName("occupation")}
                        defaultValue={this.props.occupation}
                        required={true}
                        autoComplete={true}
                    />
                    <br />
                    <TextField
                        hintText="Enter your University Name"
                        onChange={this.props.inputName("university")}
                        defaultValue={this.props.university}
                        floatingLabelText="University"
                        required={true}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        onClick={this.next}
                        style={styles}
                    />
                    <RaisedButton label="Back" onClick={this.prev} />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    marginTop: "20px",
    marginRight: "30px",
};

export default MaterialPersonalDetails;
