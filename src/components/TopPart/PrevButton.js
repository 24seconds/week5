import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import './PrevButton.css';


class PrevButton extends Component {
  render(){

    const {startDate, handlePrevweekUpdate} = this.props;

    return(
      <div>
        <Button bsStyle="link" onClick = {() => handlePrevweekUpdate(startDate)}>
          <Image src={require('../../images/prev.png')} responsive />
        </Button>
      </div>

    );
  }


}


export default PrevButton;
