import React, {Component} from 'react';
import './MonthText.css';

class MonthText extends Component {
  render(){
    const {startDate} = this.props;
    const nextMonth = startDate.clone().add(7,'day').format('MMM');

    return(

      <div className="MonthText-template">
        <div className="MonthText-month">
          {startDate.format('MMM')} {nextMonth!==startDate.format('MMM') ? ' - '+ nextMonth : ''} { startDate.format('YYYY')}
        </div>
        <div className="MonthText-year">
          
        </div>
      </div>

    );
  }
}

export default MonthText;
