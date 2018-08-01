import React, {Component} from 'react';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';
import moment from 'moment';

import './TodayButton.css';

class TodayButton extends Component {
  render(){
    const {startDate, handleCurrentweekUpdate} = this.props;

    const str = 'Time : '+moment().format('HH:mm')

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title={str}>
        <strong>{moment().format('ddd')}</strong> {moment().format('MMMM')} {moment().format('Do')}
        </Popover>
      );

    return(

      <div className="TodayButton-template">


        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="bottom"
          overlay={popoverHoverFocus}
          >
          <span className="TodayButton-button"
            onClick = {() => handleCurrentweekUpdate(startDate)}>
            TODAY
          </span>
        </OverlayTrigger>


    </div>



    );
  }
}

export default TodayButton;
