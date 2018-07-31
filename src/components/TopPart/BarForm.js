import React, {Component} from 'react';
import './BarForm.css';

import ButtonForm from './ButtonForm'
import SearchBar from './SearchBar'
import ButtonDropDown from './ButtonDropDown'

class BarForm extends Component{

  render(){

    const {month, year, currentDate,handleNextweekUpdate} = this.props;

    return(
      <div className="BarForm-template">
        <ButtonForm month={month} year={year} currentDate={currentDate} handleNextweekUpdate={handleNextweekUpdate}/>
        <SearchBar/>
        <ButtonDropDown/>
      </div>

    );
  }
}


export default BarForm;
