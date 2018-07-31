import React, {Component} from 'react';
import './ButtonForm.css';

import TodayButton from './TodayButton'
import NaviButtonForm from './NaviButtonForm'
import MonthText from './MonthText'

class ButtonForm extends Component {

  render(){

    return(
      <div className="ButtonForm-template">
        <TodayButton/>
        <NaviButtonForm/>
        <MonthText/>
      </div>
    );
  }



}


export default ButtonForm;
