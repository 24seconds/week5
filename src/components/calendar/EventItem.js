import React, {Component} from 'react';
import './EventItem.css';

class EventItem extends Component {

  render() {
    const {starTime, endTime, location, eventTitle} = this.props;

    return(
      <div className = "EventItem-template">
        <div className = "EvenItem-time">
          {starTime} ~ {endTime}
        </div>
        <div className = "EvnetItem-location">
          {location} 
        </div>
        <div className = "EventItem-title">
          {eventTitle}
        </div>
      </div>
    );
  }

}

export default EventItem;
