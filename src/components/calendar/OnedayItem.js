import React, {Component} from 'react';
import './OnedayItem.css';
import moment from 'moment';


import DateItem from './DateItem'
import EventList  from './EventList'



class OnedayItem extends Component {

  render (){
    const {date, events, oneItemId, handleMouseEnterToItem, handleShow} = this.props;
    const isToday = moment().format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
    // console.log('OnedayItem');
    // console.log(date.format("YYYY-MM-DD"));


    return(
      <div className = {`OnedayItem-template ${isToday && 'OnedayItem-isToday'}`}>
        <DateItem date={date} key = {oneItemId}/>
        <EventList date={date} events={events} key = {oneItemId} handleMouseEnterToItem = {handleMouseEnterToItem} handleShow = {handleShow}/>
      </div>
    );
  }
}




export default OnedayItem;


// {`EventItem-template ${istoday && 'isToday'}` +
//  (diff & !istoday ? ' isPastday' : (isfutureday ? ' isFutureday' : ' nono'))}
