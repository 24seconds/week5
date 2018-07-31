import React, {Component} from 'react';
import './DateItem.css';

class DateItem extends Component {


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
