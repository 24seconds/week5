import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import './NextButton.css';

class NextButton extends Component{
  render(){

    return(
      <div>
        <Image src={require('../../images/next.png')} responsive />
      </div>
    );
  }
}

export default NextButton;
