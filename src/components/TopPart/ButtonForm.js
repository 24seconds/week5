import React, {Component} from 'react';
import './ButtonForm.css';

import TodayButton from './TodayButton'
import NaviButtonForm from './NaviButtonForm'
import MonthText from './MonthText'

class ButtonForm extends Component {

  render(){

    const {month, year, handleNextweekUpdate, handlePrevweekUpdate, startDate} = this.props;

    return(
      <div className="ButtonForm-template">
        <TodayButton/>
        <NaviButtonForm startDate={startDate}
           handleNextweekUpdate={handleNextweekUpdate} handlePrevweekUpdate={handlePrevweekUpdate}/>
        <MonthText month={month} year={year}/>
      </div>
    );
  }



}


export default ButtonForm;
