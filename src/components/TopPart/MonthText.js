import React, {Component} from 'react';

class MonthText extends Component {
  render(){
    const {month, year} = this.props;

    return(
      <div className="MonthText-template">
        {month} {year}
      </div>

    );
  }
}

export default MonthText;
