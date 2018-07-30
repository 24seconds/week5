import React, {Component} from 'react';
import './OnedayItem.css';

import DateItem from './DateItem'
import EventList  from './EventList'



class OnedayItem extends Component {

  render (){
    const {day, date, events, oneItemId} =this.props;
    console.log('OnedayItem');
    console.log(day);


    return(
      <div className = "OnedayItem-template">
        <DateItem day={day} date={date} key = {oneItemId}/>
        <EventList events={events} key = {oneItemId}/>
      </div>
    );
  }
}




export default OnedayItem;
