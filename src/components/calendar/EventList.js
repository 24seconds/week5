import React, {Component} from 'react';
import EventItem from './EventItem';

class EventList extends Component {


  render(){
    const {events} = this.props;
    console.log(events);
    const eventItem = events.map(
      ({startTime, endTime, location, eventTitle}) => (
        <EventItem
          starTime = {startTime}
          endTime = {endTime}
          location = {location}
          eventTitle = {eventTitle}
          key = {eventTitle}/>
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
