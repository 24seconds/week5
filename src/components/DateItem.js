import React, {Component} from 'react';
import './DateItem.css';

class DateItem extends Component {

  state = {
    day: 'Fri',
    date: '27'
  }

  render() {
    const {day, date} = this.state;

    return (<div className="DateItem-template">
      <div className="DateItem-day">
        {day}
      </div>
      <div className="DateItem-date">
        {date}
      </div>
    </div>);
  }

}

export default DateItem;
