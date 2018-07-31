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
      startDate: moment(moment().startOf('week').format('YYYY-MM-DD')),
      currentDate:moment(moment().startOf('week').format('YYYY-MM-DD')),
      month:"Jul-Aug",
      yaer:"2018",
      dayLists:[],
      filter_tags:[],
      filter_keywords:[]
    }

    // this.updateEventInfo = this.updateEventInfo.bind(this);
    this.handleMouseEnterToItem = this.handleMouseEnterToItem.bind(this);
    this.handleNextweekUpdate = this.handleNextweekUpdate.bind(this);
    this.handlePrevweekUpdate = this.handlePrevweekUpdate.bind(this);
    this.handleCurrentweekUpdate = this.handleCurrentweekUpdate.bind(this);
    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
  }

  handleNextweekUpdate(curDate){
    this.setState({
      startDate : curDate.clone().add(7,'day'),
    })
  }

  handlePrevweekUpdate(curDate){
    this.setState({
      startDate : curDate.clone().subtract(7,'day'),
    })
  }

  handleCurrentweekUpdate(curDate){
    this.setState({
      startDate : moment(moment().startOf('week').format('YYYY-MM-DD'))
    })
  }

  handleMouseEnterToItem(event_id) {
    // console.log("handleMouseEnterToItem", event_id);
    axios.get('http://52.231.64.73:3001/events/infobyid', {
      params: {
        id: event_id
      }
    })
    .then(response => {
      // console.log('====================================');
      // console.log(response);
      // console.log('====================================');
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

  handleSearchUpdate(tags, keywords) {
    this.setState({
      filter_tags: tags,
      filter_keywords: keywords
    })
  }

  render() {
    const {title, representation, startTime, endTime,
       place, summary, tags, markers,
     month, year, startDate, currentDate, filter_keywords, filter_tags} = this.state;
    const popoverClick = (
      <Popover id="popover-trigger-click" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
        </Popover>
    );

    console.log(startDate.format('MMM'));
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
      handleMouseEnterToItem,
      handleNextweekUpdate,
      handlePrevweekUpdate,
      handleCurrentweekUpdate,
      handleSearchUpdate
    } = this;

    return (
      <div>
        <BarForm month={month} year={year} startDate={startDate}
           handleNextweekUpdate={handleNextweekUpdate}
           handlePrevweekUpdate={handlePrevweekUpdate}
           handleCurrentweekUpdate={handleCurrentweekUpdate}
           handleSearchUpdate={handleSearchUpdate} />

        <BodyForm title={title} representation={representation} startTime={startTime} endTime={endTime} startDate={startDate}
          currentDate={currentDate} place={place} summary={summary} tags={tags} markers={markers}
           handleMouseEnterToItem={handleMouseEnterToItem} filter_tags={filter_tags} filter_keywords={filter_keywords} />
      </div>
    );
  }
}

export default App;

//<DayListTemplate/>
