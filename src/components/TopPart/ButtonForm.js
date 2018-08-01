import React, {Component} from 'react';
import './ButtonForm.css';

import TodayButton from './TodayButton'
import NaviButtonForm from './NaviButtonForm'
import MonthText from './MonthText'

class ButtonForm extends Component {

  render(){

    const {handleNextweekUpdate,
      handlePrevweekUpdate, handleCurrentweekUpdate, startDate} = this.props;

    return(
      <div className="ButtonForm-template">
        <TodayButton handleCurrentweekUpdate={handleCurrentweekUpdate} startDate={startDate}/>
        <NaviButtonForm startDate={startDate}
           handleNextweekUpdate={handleNextweekUpdate} handlePrevweekUpdate={handlePrevweekUpdate}/>
         <MonthText startDate={startDate}/>
      </div>
    );
  }



}


export default ButtonForm;
