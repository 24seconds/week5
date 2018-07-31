import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import './PrevButton.css';


class PrevButton extends Component {
  render(){

    return(
      <div>
        <Button bsStyle="link">
          <Image src={require('../../images/prev.png')} responsive />
        </Button>
      </div>

    );
  }


}


export default PrevButton;
