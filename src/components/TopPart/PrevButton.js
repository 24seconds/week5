import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import './PrevButton.css';
import Icon from '../../images/prev2.png'


class PrevButton extends Component {
  render(){

    const {startDate, handlePrevweekUpdate} = this.props;

    const imageClick = () => {
      console.log("Click");
    }

    return(
      <div className="PrevButton-template">

          <Image className="PrevButton-image"
            src={require('../../images/prev2.png')} responsive
            onClick = {() => handlePrevweekUpdate(startDate)} />

      </div>

    );
  }


}


export default PrevButton;
