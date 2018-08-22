import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      givenName: "",
      familyName: "",
      email: "",
      gender: "",
      phoneNumber: "",
      userName: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    let formData = Object.assign({}, this.state)
    delete formData.isLoading
    debugger

    axios.post("url", formData).then(res,)
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ userName: "test" });

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>

        <FormGroup controlId="givenName" bsSize="large">
          <ControlLabel>Given Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.givenName}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="familyName" bsSize="large">
          <ControlLabel>Family Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.familyName}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="phoneNumber" bsSize="large">
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="userName" bsSize="large">
          <ControlLabel> User Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>

          <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

       <button className="btn btn-primary form-btn mx-auto submit-btn button-actions" disabled={this.state.isLoading}>Submit</button>
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}