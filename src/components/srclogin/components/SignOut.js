import React from 'react';
import './SignOut.css';
import { auth } from '../firebase';

const SignOutButton = () =>
  <button className="SignOut-template"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;
