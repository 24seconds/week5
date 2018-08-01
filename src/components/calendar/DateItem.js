import React, {Component} from 'react';
import './DateItem.css';
import moment from 'moment';

class DateItem extends Component {

// If today, text Color #4285f4
// For past days int, text color #9e9e9e
// For past days string, text color #75757
  state = {
    today : moment().format("YYYY-MM-DD"),
  }

  render() {
    const {date} = this.props;
    const checktoday = this.state.today === date.format("YYYY-MM-DD");

    return (<div className="DateItem-template">
      <div className={`DateItem-day ${checktoday && 'checktoday'}`}>
        {date.format("ddd")}
      </div>
      <div className={`DateItem-date ${checktoday && 'checktoday'}`}>
        {date.format("DD")}
      </div>
    </div>);
  }

}

export default DateItem;

// "DateItem-day"
