import React, {Component} from 'react';
import axios from 'axios';
import OnedayItem from './OnedayItem';
import './DayListTemplate.css';

class DayListTemplate extends Component {

  state = {
    dayLists : []
  }

  componentDidMount(){
    this._getEvents();
  }

  _getEvents = async () => {
    await this._callApi();
  }

  _callApi = () => {
    const {startDate} = this.props;

    for(let i=0; i<7; i++) {
      let date = startDate.clone();
      date.add('days', i);
      axios.get('http://52.231.64.73:3001/events/itemsbydate', {
        params: {
          date: date.format("YYYY-MM-DD")
        }
      })
      .then(response => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');

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

    console.log('=============await결과=============');
    console.log(dayLists);
    console.log('====================================');

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
