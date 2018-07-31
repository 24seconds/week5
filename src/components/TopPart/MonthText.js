import React, {Component} from 'react';
import './MonthText.css';

class MonthText extends Component {
  render(){
    const {month, year, startDate} = this.props;
    const nextMonth = startDate.clone().add(7,'day').format('MMM');

    return(

      <div className="MonthText-template">
        <div>
          {startDate.format('MMM')} {nextMonth!==startDate.format('MMM') ? ' - '+nextMonth : ''}
        </div>
        <div>
          { startDate.format('YYYY')}
        </div>
      </div>

    );
  }
}

export default MonthText;
