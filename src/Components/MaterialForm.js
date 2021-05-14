import React, { Component } from 'react'
import MaterialUserDetails from "./MaterialUserDetails";
import MaterialPersonalDetails from './MaterialPersonalDetails';
import MaterialConfirm from './MaterialConfirm';
import MaterialSuccess from "./MaterialSuccess";

export class MaterialForm extends Component {
  state = {
    page: 1,
    fn: '',
    ln: '',
    email: '',
    occupation: '',
    university: '',
    // input: '',
  }

  nextPage = () => {
    this.setState([this.state.page++])
  }

  prevPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  inputName= input => e => {
    e.preventDefault;
    this.setState({[input]: e.target.value })
    // this.setState({input: e.target.name })
    // this.setState({[this.state.input]: e.target.value})
  }
  
  
  render() {
    console.log('the fn is ' + this.state.fn);
    console.log('the ln is ' + this.state.occupation);
    console.log('the email is ' + this.state.university);
    console.log('break');
    switch (this.state.page) {
      case 1:
        return (
          <div>
            <MaterialUserDetails nextPage={this.nextPage} inputName={this.inputName} fn={this.state.fn} ln={this.state.ln} email={this.state.email} />  
          </div>
        )
      // break;
      case 2:
        return (
          <div>
            <MaterialPersonalDetails nextPage={this.nextPage} prevPage={this.prevPage} occupation={this.state.occupation} university={this.state.university} inputName={this.inputName} />
          </div>
        )
      // break;
      case 3:
        return (
          <div>
            <MaterialConfirm nextPage={this.nextPage} prevPage={this.prevPage} inputName={this.inputName} />
          </div>
        )
      // break;
      case 4:
        return (
          <div>
            <MaterialSuccess prevPage={this.prevPage} inputName={this.inputName} />
          </div>
        )
      // break;
    }
  }
}

export default MaterialForm;
