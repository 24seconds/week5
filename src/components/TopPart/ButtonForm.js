import React, {Component} from 'react';
import './ButtonForm.css';

import TodayButton from './TodayButton'
import NaviButtonForm from './NaviButtonForm'
import MonthText from './MonthText'

class ButtonForm extends Component {

  render(){

    const {month, year, handleNextweekUpdate, currentDate} = this.props;

    return(
      <div className="ButtonForm-template">
        <TodayButton/>
        <NaviButtonForm currentDate={currentDate} handleNextweekUpdate={handleNextweekUpdate}/>
        <MonthText month={month} year={year}/>
      </div>
    );
  }



}


export default ButtonForm;
