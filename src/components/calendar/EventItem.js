import React, {Component} from 'react';
import './EventItem.css';
import LinesEllipsis from 'react-lines-ellipsis'

class EventItem extends Component {

// if pastdays, gray color text
// if futuredays, white color text


  render() {
    const {eventId, starTime, endTime, location, eventTitle, handleMouseEnterToItem, handleShow, interest} = this.props;

    return(
      <div className = "EventItem-template" onMouseOver = {() => handleMouseEnterToItem(eventId)} onClick = {() => handleShow(eventId)}>
        <div className = "EvenItem-time">
          {starTime.substring(0,5)} - {endTime.substring(0,5)}
        </div>
        <div className = "EvnetItem-location">
          {location}
        </div>
        <div className = "EventItem-title">
          {eventTitle}
        </div>
        <div>{interest? "관심!" : ""}</div>
      </div>
    );
  }

}

export default EventItem;
