import React, {Component} from 'react';
import './TopbarForm.css';

import BarForm from './BarForm'
import AccountBar from './AccountBar'

class TopbarForm extends Component{

  render(){

    const {startDate,
      handleNextweekUpdate, handlePrevweekUpdate, handleCurrentweekUpdate, handleSearchUpdate} = this.props;


    return(
      <div className="TopbarForm-template">
        <BarForm startDate={startDate} handleNextweekUpdate={handleNextweekUpdate}
          handlePrevweekUpdate={handlePrevweekUpdate}
          handleCurrentweekUpdate={handleCurrentweekUpdate}
          handleSearchUpdate={handleSearchUpdate}/>
        <AccountBar/>
      </div>

    );
  }

}

export default TopbarForm;
