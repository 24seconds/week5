import React, {Component} from 'react';
import './DateItem.css';

class DateItem extends Component {

// If today, text Color #4285f4
// For past days int, text color #9e9e9e
// For past days string, text color #75757

  render() {
    const {date} = this.props;

    return (<div className="DateItem-template">
      <div className="DateItem-day">
        {date.format("ddd")}
      </div>
      <div className="DateItem-date">
        {date.format("DD")}
      </div>
    </div>);
  }

}

export default DateItem;
