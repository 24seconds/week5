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
          <div className="PrevButton-text" onClick = {() => handlePrevweekUpdate(startDate)}>
            &lt;
          </div>
      </div>

    );
  }


}


export default PrevButton;


// <Image className="PrevButton-image"
//   src={require('../../images/prev2.png')} responsive
//   onClick = {() => handlePrevweekUpdate(startDate)} />
