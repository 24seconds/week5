import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import {Popover, OverlayTrigger, popoverHoverFocus, Button, ButtonToolbar} from 'react-bootstrap';

import DateItem from './components/calendar/DateItem'
import EventItem from './components/calendar/EventItem'
import EventList  from './components/calendar/EventList'
import OnedayItem from './components/calendar/OnedayItem'
import DayListTemplate from './components/calendar/DayListTemplate'

import PrevButton from './components/TopPart/PrevButton'
import NextButton from './components/TopPart/NextButton'
import SearchBar from './components/TopPart/SearchBar'
import TodayButton from './components/TopPart/TodayButton'
import MonthText from './components/TopPart/MonthText'
import ButtonDropDown from './components/TopPart/ButtonDropDown'
import BarForm from './components/TopPart/BarForm'

import EventInfo from './components/EventInfo/EventInfo'
import Map from './components/Map/Map'

import BodyForm from './components/BodyPart/BodyForm'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      representation: "",
      startTime: moment(),
      endTime: moment(),
      place: "",
      summary: "",
      tags: [],
      markers: [],
      startDate: moment("2018-07-27"),
      month:"Jul-Aug",
      yaer:"2018"
    }

    // this.updateEventInfo = this.updateEventInfo.bind(this);
    this.handleMouseEnterToItem = this.handleMouseEnterToItem.bind(this);
  }

  handleMouseEnterToItem(event_id) {
   console.log("handleMouseEnterToItem", event_id);
   axios.get('http://52.231.64.73:3001/events/infobyid', {
     params: {
       id: event_id
     }
   })
   .then(response => {
     console.log('====================================');
     console.log(response);
     console.log('====================================');
     if(response.data.success) {
       const info = response.data.info;

       let start_time = moment(info.date.substring(0, 10) + 'T' + info.start_time);
       let end_time = moment(info.date.substring(0, 10) + 'T' + info.end_time);

       this.setState({
         title: info.title,
         representation: info.creator_id,
         startTime: start_time,
         endTime: end_time,
         place: info.place,
         summary: info.summary,
         tags: info.tags.map(
           (tag) => ({tag: tag})
         ),
         markers: [{ lat: info.latitude, lng: info.longitude }]
       })
     }
   });
 }

  render() {
    const {title, representation, startTime, endTime,
       place, summary, tags, markers,
     month, year,startDate} = this.state;
    const popoverClick = (
      <Popover id="popover-trigger-click" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
        </Popover>
    );

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverFocus = (
      <Popover id="popover-trigger-focus" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
      );

    const popoverClickRootClose = (
      <Popover id="popover-trigger-click-root-close" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
      );

    const {
      handleMouseEnterToItem
    } = this;

    return (
      <div>
        <BarForm/>

        <BodyForm title={title} representation={representation} startTime={startTime} endTime={endTime} startDate={startDate}
          place={place} summary={summary} tags={tags} markers={markers} handleMouseEnterToItem={handleMouseEnterToItem}/>
      </div>
    );
  }
}

export default App;

//<DayListTemplate/>
