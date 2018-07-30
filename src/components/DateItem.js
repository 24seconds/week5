import React, {Component} from 'react';
import './DateItem.css';

class DateItem extends Component {


  render() {
    const {day, date} = this.props;

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
