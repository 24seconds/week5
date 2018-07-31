import React, {Component} from 'react';
import './EventItem.css';

class EventItem extends Component {

  render() {
    const {eventId, starTime, endTime, location, eventTitle, handleMouseEnterToItem} = this.props;

    return(
      <div className = "EventItem-template" onMouseOver = {() => handleMouseEnterToItem(eventId)} onClick = {this.handleShow}>
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
