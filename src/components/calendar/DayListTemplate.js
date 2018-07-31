import React, {Component} from 'react';
import axios from 'axios';
import OnedayItem from './OnedayItem';
import './DayListTemplate.css';

class DayListTemplate extends Component {

  state = {

    dayLists : []
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(this.props.startDate.format("YYYYMMDD"));
    console.log(nextProps.startDate.format("YYYYMMDD"));
    console.log(this.props.startDate.format("YYYYMMDD")===nextProps.startDate.format("YYYYMMDD"));
    if(this.props.startDate.format("YYYYMMDD")===nextProps.startDate.format("YYYYMMDD")){
      console.log('trueeeeeeeeeeeeeeeeeeeeeeeeeeee');
      return true;
    }
    else {
      console.log('falsssssssssssssssssssssssse');
      this._resetState();
      this._getEvents(nextProps.startDate);
      return true;
    }
    // this._getEvents();
    return true;
  }

  _resetState(){
    this.setState({
      dayLists : []
      }
    )
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
    console.log(this.props.startDate);
    console.log(nextProps.startDate);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(prevProps.startDate);
    return true;
  }

  componentDidMount(){
    console.log('DayListTemplate');
    console.log(this.props.startDate);
    console.log(this.props.startDate._i);
    console.log(this.props.currentDate);
    this._getEvents(this.props.startDate);
  }

  _getEvents = async (startDate) => {
    await this._callApi(startDate);
  }

  _callApi = (startDate) => {
    const { currentDate} = this.props;
    console.log('call API,-----',startDate,currentDate);
    for(let i=0; i<7; i++) {
      let date = startDate.clone();
      date.add('days', i);
      axios.get('http://52.231.64.73:3001/events/itemsbydate', {
        params: {
          date: date.format("YYYY-MM-DD")
        }
      })
      .then(response => {
        // console.log('====================================');
        // console.log(response);
        // console.log('====================================');

        const items = response.data.items;
        let events = [];

        for(let i=0; i<items.length; i++) {
          const item = items[i];
          events.push({eventId: item.event_id, startTime: item.start_time, endTime: item.end_time, location: item.place, eventTitle: item.title});
        }

        this.setState({
          dayLists: [...this.state.dayLists, {oneItemId : i, date: date, events : events}]
        })
      });
    }
  }


  render(){
    const {handleMouseEnterToItem, handleShow} = this.props;
    const {dayLists} = this.state;
    dayLists.sort(function (a,b){
      return a.date<b.date?-1:a.date>b.date?1:0;
    });

    // console.log('=============await결과=============');
    // console.log(dayLists);
    // console.log('====================================');

    const onedayItems = dayLists.map(
      ({oneItemId, date, events }) => (
        <OnedayItem
          date = {date}
          events = {events}
          key = {oneItemId}
          handleMouseEnterToItem = {handleMouseEnterToItem}
          handleShow = {handleShow}
        />
      )
    );

    return(
      <div className = "DayListTemplate-template">
        {onedayItems}
      </div>
    );
  }
}


export default DayListTemplate;
