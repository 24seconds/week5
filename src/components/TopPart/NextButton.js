import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import './NextButton.css';

class NextButton extends Component{
  render(){

    const {startDate, handleNextweekUpdate} = this.props;

    return(
      <div className='NextButton-template'>
        <Button bsStyle="link" onClick = {() => handleNextweekUpdate(startDate)}>
          <Image src={require('../../images/next2.png')} rounded />
        </Button>

      </div>
    );
  }
}

export default NextButton;
