import React, { Component } from 'react';
import {
  Link,
  withRouter,} from 'react-router-dom';

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';
import './SignUp.css';

const SignUpPage = ({ history}) =>
  <div>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
username: '',
email: '',
passwordOne: '',
passwordTwo: '',
error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();

  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
           value={username}
           onChange={event => this.setState(byPropKey('username', event.target.value))}
           type="text"
           placeholder="Full Name"
         />
         <input
           value={email}
           onChange={event => this.setState(byPropKey('email', event.target.value))}
           type="text"
           placeholder="Email Address"
         />
         <input
           value={passwordOne}
           onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
           type="password"
           placeholder="Password"
         />
         <input
           value={passwordTwo}
           onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
           type="password"
           placeholder="Confirm Password"
         />
         <button type="submit">
           Sign Up
         </button>
         <li><Link to={routes.HOME}>Back</Link></li>

         { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <div className="SingUpLink-template">
    Do not have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </div>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
