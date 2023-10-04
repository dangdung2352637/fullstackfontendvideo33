import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import "./Login.scss";

// import { FormattedMessage } from "react-intl";
// import { divide } from "lodash";

// import adminService from "../services/adminService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "hoidanit",
      password: "withEric",
      isShowPassword: false
    };
  }
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(event.target.value);
  }
  handleLogin = () => {

    console.log('username',this.state.username);
    console.log('password',this.state.password);

  }
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              ></input>
            </div>
            <div className="col-12 form-group login-input">
              <label >Password:</label>
              <div  className="custom-input-password" >
              <input
               className="form-control"
                type={this.state.isShowPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={this.state.password}
                onChange={(event) => this.handleOnChangePassword(event)}
              ></input>
              <span
              onClick={() => {this.handleShowHidePassword()}}
              >
              <i class= {this.state.isShowPassword ? 'fas fa-eye ' : 'fas fa-eye-slash'}></i>
              </span>
              </div>
              <div className="col-12 ">
                <button className="btn-login"
                onClick={() => {this.handleLogin()}}
                >Login</button>
              </div>

              <div className="col-12 ">
                <span className="forgot-password">Forgot Your Password:</span>
              </div>
              <div className="col-12 ">
                <div className="col-12 text-centrer mt-3">Or Login With:</div>
              </div>
              <div className="col-12 social-login">
                <i className="fab fa-google-plus-g google"></i>
                <i className="fab fa-facebook facebook"></i>
              </div>
            </div>
          </div>
        </div>
        //{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
