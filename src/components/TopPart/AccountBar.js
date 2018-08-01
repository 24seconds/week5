import React, {Component} from 'react';
import './AccountBar.css';

import Login from '../srclogin/components/App'

class AccountBar extends Component{

  render(){


    return(
      <div className="AccountBar-template">
        <Login/>
      </div>
    );
  }


}

export default AccountBar;
