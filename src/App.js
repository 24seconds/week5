import React, { Component } from 'react';
import DateItem from './components/DateItem'
import EventItem from './components/EventItem'
import EventList  from './components/EventList'
import OnedayItem from './components/OnedayItem'
import DayListTemplate from './components/DayListTemplate'

class App extends Component {
  render() {
    return (
      <div>

        <DayListTemplate/>

      </div>
    );
  }
}

export default App;
