import React, {Component} from 'react';
import './EventItem.css';
import LinesEllipsis from 'react-lines-ellipsis'
import moment from 'moment';

class EventItem extends Component {

// if pastdays, gray color text
// if futuredays, white color text


  render() {
    const {date, eventId, starTime, endTime, location, eventTitle, handleMouseEnterToItem, handleShow, interest} = this.props;
    const istoday = moment().format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
    const diff = moment.duration(date.diff(moment())).asHours() < 0;
    const isfutureday = moment.duration(date.diff(moment())).asHours() > 0;
    console.log(`EventItem-template ${istoday && 'isToday'}` +
     (diff & !istoday ? ' isPastday' : (isfutureday ? ' isFutureday' : ' nono')));

    return(
      <div className = {`EventItem-template ${istoday && 'isToday'}` +
       (diff & !istoday ? ' isPastday' : (isfutureday ? ' isFutureday' : ' nono'))} onMouseOver = {() => handleMouseEnterToItem(eventId)} onClick = {() => handleShow(eventId, interest)}>
        <div className = {`EventItem-time ${interest && 'isInterest'}`}>
          {starTime.substring(0,5)} - {endTime.substring(0,5)}
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
