import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import './NextButton.css';

class NextButton extends Component{
  render(){

    const {currentDate, handleNextweekUpdate} = this.props;    

    return(
      <div>
        <Button bsStyle="link" onClick = {() => handleNextweekUpdate(currentDate)}>
          <Image src={require('../../images/next.png')} responsive />
        </Button>

      </div>
    );
  }
}

export default NextButton;
