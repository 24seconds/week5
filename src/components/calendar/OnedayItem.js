import React, {Component} from 'react';
import './OnedayItem.css';

import DateItem from './DateItem'
import EventList  from './EventList'



class OnedayItem extends Component {

  render (){
    const {date, events, oneItemId, handleMouseEnterToItem, handleShow} = this.props;
    // console.log('OnedayItem');
    // console.log(date.format("YYYY-MM-DD"));


    return(
      <div className = "OnedayItem-template">
        <DateItem date={date} key = {oneItemId}/>
        <EventList events={events} key = {oneItemId} handleMouseEnterToItem = {handleMouseEnterToItem} handleShow = {handleShow}/>
      </div>
    );
  }
}




export default OnedayItem;
