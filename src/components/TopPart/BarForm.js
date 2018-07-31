import React, {Component} from 'react';
import './BarForm.css';

import ButtonForm from './ButtonForm'
import SearchBar from './SearchBar'
import ButtonDropDown from './ButtonDropDown'

class BarForm extends Component{

  render(){

    const {month, year, startDate,
      handleNextweekUpdate, handlePrevweekUpdate, handleCurrentweekUpdate, handleSearchUpdate} = this.props;

    return(
      <div className="BarForm-template">
        <ButtonForm month={month} year={year} startDate={startDate}
           handleNextweekUpdate={handleNextweekUpdate}
           handlePrevweekUpdate={handlePrevweekUpdate}
           handleCurrentweekUpdate={handleCurrentweekUpdate}/>
        <SearchBar handleSearchUpdate={handleSearchUpdate}/>
        <ButtonDropDown/>
      </div>

    );
  }
}


export default BarForm;
