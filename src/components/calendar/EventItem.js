import React, {Component} from 'react';
import './EventItem.css';

class EventItem extends Component {

  render() {
    const {eventId, starTime, endTime, location, eventTitle, handleMouseEnterToItem, handleShow} = this.props;

    return(
      <div className = "EventItem-template" onMouseOver = {() => handleMouseEnterToItem(eventId)} onClick = {() => handleShow(eventId)}>
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
