import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Redirect } from 'react-router-dom';
import { signUpUser } from '../../actions/userAction';

const SignUpForm = (props) => {
  const { handleSignUpUser, error, loggedIn } = props;

  if (loggedIn) {
    return <Redirect to="/measurement" />;
  }

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    const data = {
      email,
      username: userName,
      password,
      password_confirmation: passwordConfirm,
    };
    e.preventDefault();
    setEmail('');
    setUserName('');
    setPassword('');
    setPasswordConfirm('');
    handleSignUpUser(data);
  };

  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-left">
      <p className="row justify-content-center text-danger">
        {error !== '' && <span className="d-block m-auto">{error}</span>}
      </p>

      <form
        className=" d-flex flex-column align-items-start col-sm-8 col-md-6"
        onSubmit={handleFormSubmit}
      >
        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput2">
            User Name
            <input
              type="text"
              value={userName}
              className="form-control"
              placeholder="@username"
              onChange={handleUserNameChange}
              required
            />
          </label>
        </div>

        <div className="form-group my-3">
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              value={email}
              className="form-control"
              placeholder="...email"
              onChange={handleEmailChange}
              required
            />
          </label>
        </div>

        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput2">
            Password
            <input
              type="password"
              value={password}
              className="form-control"
              placeholder="password"
              onChange={handlePasswordChange}
              required
            />
          </label>
        </div>

        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput2">
            Confirm Password
            <input
              type="password"
              value={passwordConfirm}
              className="form-control"
              onChange={handlePasswordConfirmChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Sign Up
        </button>
      </form>
      <p className="">
        <span className="inline-block">Already have an account ? </span>
        <span className="inline-block">
          <BrowserRouter>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              log in
            </Link>
          </BrowserRouter>
        </span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  error: state.userReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleSignUpUser: (data) => {
    dispatch(signUpUser(data));
  },
});

SignUpForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  handleSignUpUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
