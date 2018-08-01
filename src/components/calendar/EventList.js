import React, {Component} from 'react';
import EventItem from './EventItem';

class EventList extends Component {


  render(){
    const {events, handleMouseEnterToItem, handleShow} = this.props;

    const eventItem = events.map(
      ({eventId, startTime, endTime, location, eventTitle, interest}) => (
        <EventItem
          eventId = {eventId}
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
      <div>
        {eventItem}
      </div>

    );
  }


}


export default EventList;
