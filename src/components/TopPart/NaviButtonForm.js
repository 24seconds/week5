import React, {Component} from 'react';
import './NaviButtonForm.css';

import PrevButton from './PrevButton'
import NextButton from './NextButton'

class NaviButtonForm extends Component{

  render(){
    const {handleNextweekUpdate, handlePrevweekUpdate, startDate} =this.props;

    return(
      <div className="NaviButtonForm-template">
        <PrevButton startDate={startDate} handlePrevweekUpdate={handlePrevweekUpdate}/>
        <NextButton startDate={startDate} handleNextweekUpdate={handleNextweekUpdate}/>
      </div>

    );
  }


}


export default NaviButtonForm;
