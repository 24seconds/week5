import React, {Component} from 'react';
import './BarForm.css';

import ButtonForm from './ButtonForm'
import SearchBar from './SearchBar'
import ButtonDropDown from './ButtonDropDown'

class BarForm extends Component{

  render(){

    return(
      <div className="BarForm-template">
        <ButtonForm/>
        <SearchBar/>
        <ButtonDropDown/>
      </div>

    );
  }
}


export default BarForm;
