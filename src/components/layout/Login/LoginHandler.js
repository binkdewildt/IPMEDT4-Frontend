import React from "react";
import { connect } from "react-redux";

// Components
import { Login } from "./Login";
import { logIn, register } from "../../../actions/SessionActions";

class LoginHandler extends React.Component {
  render() {
    return (
      <>
        {this.props.session.errorMessage && (
          <h1> Error: {this.props.session.errorMessage} </h1>
        )}
        <Login />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const mapDispatchToProps = () => {
  return {
    login: logIn,
    register: register,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginHandler);
