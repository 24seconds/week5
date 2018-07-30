import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';
import './PrevButton.css';


class PrevButton extends Component {
  render(){

    return(
      <div>        
        <Image src={require('../../images/prev.png')} responsive />
      </div>

    );
  }


}


export default PrevButton;
