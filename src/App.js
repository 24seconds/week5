import React, { Component } from 'react';
import DateItem from './components/calendar/DateItem'
import EventItem from './components/calendar/EventItem'
import EventList  from './components/calendar/EventList'
import OnedayItem from './components/calendar/OnedayItem'
import DayListTemplate from './components/calendar/DayListTemplate'

import PrevButton from './components/topbar/PrevButton'
import EventInfo from './components/EventInfo/EventInfo'
import Map from './components/Map/Map'

class App extends Component {
  state = {
       title: "몰입 캠프 최종 발표",
       representation: "장병규 · 류석영",
       startTime: new Date(2018, 7, 2, 11),
       endTime: new Date(2018, 7, 2, 12),
       place: "김병호 · 김삼열 IT 융합빌딩(N1) 114호",
       summary: "5주 동안 CS496 몰입 캠프에 참가한 학생들의 마지막 발표입니다.",
       tags: [
         { tag: "이준섭" },
         { tag: "천근영" },
         { tag: "이종완" }
       ],
       markers: [
         { text: "교수회관", lat: 36.375, lng: 127.364785 },
         { text: "E5", lat: 36.368157, lng: 127.363695 },
       ]
}

  render() {
    const {title, representation, startTime, endTime, place, summary, tags, markers} = this.state;

    return (
      <div>
        <button>asdfasdfasdf</button>

        <PrevButton/>
        <DayListTemplate/>
        <EventInfo title={title} representation ={representation} startTime = {startTime}
          endTime ={endTime} place ={place} summary={summary} tags={tags}/>
        <Map markers ={markers}/>



      </div>
    );
  }
}

export default App;

//<DayListTemplate/>
