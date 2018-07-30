import React, {Component} from 'react';
import OnedayItem from './OnedayItem';
import './DayListTemplate.css';

class DayListTemplate extends Component {

  state = {
    dayLists : [
      {oneItemId : 0, day: 'Sun', date: '29',
        events : [
          {startTime : '16:00', endTime : '18:00', location : 'E11', eventTitle : 'Sample Semina'},
          {startTime : '16:00', endTime : '17:00', location : 'W8-2', eventTitle : 'Sample Event'},
          {startTime : '18:00', endTime : '19:00', location : 'W8-2', eventTitle : 'Sample Dinner'},
          {startTime : '20:00', endTime : '21:00', location : 'N13', eventTitle : 'Sample Concert'},
          {startTime : '20:00', endTime : '22:00', location : 'N3', eventTitle : 'Sample Sport'}
        ]
      },

      {oneItemId : 1, day: 'Mon', date: '30',
        events : [
          {startTime : '16:00', endTime : '18:00', location : 'E11', eventTitle : 'Sample Semina'},
          {startTime : '18:00', endTime : '19:00', location : 'W8-2', eventTitle : 'Sample Dinner'},
          {startTime : '20:00', endTime : '21:00', location : 'N13', eventTitle : 'Sample Concert'},
          {startTime : '20:00', endTime : '22:00', location : 'N3', eventTitle : 'Sample Sport'}
        ]
      },

      {oneItemId : 2, day: 'Tue', date: '31',
        events : [
          {startTime : '16:00', endTime : '18:00', location : 'E11', eventTitle : 'Sample Semina'},
          {startTime : '20:00', endTime : '22:00', location : 'N3', eventTitle : 'Sample Sport'}
        ]
      },

      {oneItemId : 3, day: 'Wed', date: '1',
        events : [
          {startTime : '16:00', endTime : '18:00', location : 'E11', eventTitle : 'Sample Semina'},


          {startTime : '20:00', endTime : '21:00', location : 'N13', eventTitle : 'Sample Concert'},
          {startTime : '20:00', endTime : '22:00', location : 'N3', eventTitle : 'Sample Sport'}
        ]
      },

      {oneItemId : 4, day: 'Thur', date: '2',
        events : [
          {startTime : '16:00', endTime : '18:00', location : 'E11', eventTitle : 'Sample Semina'},
          {startTime : '16:00', endTime : '17:00', location : 'W8-2', eventTitle : 'Sample Event'},
          {startTime : '18:00', endTime : '19:00', location : 'W8-2', eventTitle : 'Sample Dinner'},
          {startTime : '20:00', endTime : '21:00', location : 'N13', eventTitle : 'Sample Concert'},
          {startTime : '20:00', endTime : '22:00', location : 'N3', eventTitle : 'Sample Sport'}
        ]
      },

      {oneItemId : 5, day: 'Fri', date: '3',
        events : [
          {startTime : '16:00', endTime : '18:00', location : 'E11', eventTitle : 'Sample Semina'},

          {startTime : '20:00', endTime : '22:00', location : 'N3', eventTitle : 'Sample Sport'}
        ]
      },

      {oneItemId : 6, day: 'Sat', date: '4',
        events : [
          {startTime : '16:00', endTime : '18:00', location : 'E11', eventTitle : 'Sample Semina'},
          {startTime : '16:00', endTime : '17:00', location : 'W8-2', eventTitle : 'Sample Event'},
          {startTime : '18:00', endTime : '19:00', location : 'W8-2', eventTitle : 'Sample Dinner'},
          {startTime : '20:00', endTime : '21:00', location : 'N13', eventTitle : 'Sample Concert'},
          {startTime : '20:00', endTime : '22:00', location : 'N3', eventTitle : 'Sample Sport'}
        ]
      }
    ]
  }

  render(){
    const {dayLists} = this.state;

    const onedayItem = dayLists.map(
      ({oneItemId, day, date, events }) => (
          <OnedayItem
            day = {day}
            date = {date}
            events = {events}
            key = {oneItemId}
            />
      )
    );

    return(
      <div className = "DayListTemplate-template">
        {onedayItem}
      </div>
    );
  }
}


export default DayListTemplate;
