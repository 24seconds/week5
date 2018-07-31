import React, {Component} from 'react';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';
import moment from 'moment';

import './TodayButton.css';

class TodayButton extends Component {
  render(){
    const {startDate, handleCurrentweekUpdate} = this.props;

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title={moment().format('HH:mm')}>
        <strong>{moment().format('ddd')}</strong> Check this info.
        </Popover>
      );

    return(
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="bottom"
        overlay={popoverHoverFocus}
        >
        <Button onClick = {() => handleCurrentweekUpdate(startDate)}>
          Today
        </Button>
      </OverlayTrigger>

    );
  }
}

export default TodayButton;
