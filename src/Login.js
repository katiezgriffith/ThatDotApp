import React from "react"
// initilize Userfront
import Userfront from "@userfront/core";


import './Login.css';
import ReactDOM from 'react-dom';





// Initialize Userfront Core JS
Userfront.init("demo1234");

// Define the Login form component
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: "",
      password: "",
      alertMessage: "" };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);
  }

  // Whenever an input changes value, change the corresponding state variable
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    // Reset the alert to empty
    this.setAlertMessage();
    // Call Userfront.login()
    Userfront.login({
      method: "password",
      emailOrUsername: this.state.emailOrUsername,
      password: this.state.password })
    .catch(error => {
      this.setAlertMessage(error.message);
    });
  }

  setAlertMessage(message) {
    this.setState({ alertMessage: message });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Alert, { message: this.state.alertMessage }), /*#__PURE__*/
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("label", null, "Email or username", /*#__PURE__*/

      React.createElement("input", {
        name: "emailOrUsername",
        type: "text",
        value: this.state.emailOrUsername,
        onChange: this.handleInputChange })), /*#__PnURE__*/


      React.createElement("label", null, "Password", /*#__PURE__*/

      React.createElement("input", {
        name: "password",
        type: "password",
        value: this.state.password,
        onChange: this.handleInputChange })), /*#__PURE__*/


      React.createElement("button", { type: "submit" }, "Log in")), /*#__PURE__*/


      React.createElement("p", null, "or"), /*#__PURE__*/

      React.createElement(SSOButton, { provider: "google" })));


  }}


// Define the alert component
class Alert extends React.Component {
 
  render() {
    if (!this.props.message) return "";
    return /*#__PURE__*/React.createElement("div", { id: "alert" }, this.props.message);
  }}


// Define the Single Sign-on (SSO) button
class SSOButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    Userfront.login({ method: this.props.provider });
    event.preventDefault();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("button", { onClick: this.handleClick }, "Log in with ",
      this.props.provider));


  }}


// Render the login form
ReactDOM.render( /*#__PURE__*/React.createElement(Login, null), document.getElementById("root"));

