import React from "react";
import { withRouter } from "react-router-dom";
import environments from "../../environments/index";
import { LoginComponent } from "../../components";
class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    localStorage.setItem("isAuthenticated", false);
    localStorage.clear("selected");
  }

  //handle onChange event
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //handle login action

  handleSubmit = () => {
    const { username, password } = this.state;

    //check empty text field
    if (!username || !password) {
      window.alert("Please enter username/password");
    } else {
      //validate username and password
      if (
        environments.USER_ID === username &&
        environments.PASSWORD === password
      ) {
        //if validated set Flag and redirect
        localStorage.setItem("isAuthenticated", true);
        this.props.history.push(`${process.env.PUBLIC_URL}`);
      } else {
        window.alert("Username/password does not match");
      }
    }
  };

  render() {
    return (
      <LoginComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        username={this.state.username}
        password={this.state.password}
      />
    );
  }
}
export default withRouter(Login);
