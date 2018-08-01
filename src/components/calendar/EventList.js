import React, {Component} from 'react';
import EventItem from './EventItem';
import './EventList.css';

class EventList extends Component {


  render(){
    const {date, events, handleMouseEnterToItem, handleShow} = this.props;

    const eventItem = events.map(
      ({eventId, startTime, endTime, location, eventTitle, interest}) => (
        <EventItem
          eventId = {eventId}
          date = {date}
          starTime = {startTime}
          endTime = {endTime}
          location = {location}
          eventTitle = {eventTitle}
          handleMouseEnterToItem = {handleMouseEnterToItem}
          handleShow = {handleShow}
          interest = {interest} />
      )
    );

    return(
      <div className="EventList-template">
        {eventItem}
      </div>

    );
  }


}


export default EventList;
