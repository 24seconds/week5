import React, {Component} from 'react';
import './NaviButtonForm.css';

import PrevButton from './PrevButton'
import NextButton from './NextButton'

class NaviButtonForm extends Component{

  render(){
    const {handleNextweekUpdate, currentDate} =this.props;


    return(
      <div className="NaviButtonForm-template">
        <PrevButton />
        <NextButton currentDate={currentDate} handleNextweekUpdate={handleNextweekUpdate}/>
      </div>

    );
  }


}


export default NaviButtonForm;
