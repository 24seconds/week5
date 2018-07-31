import React, {Component} from 'react';
import './NaviButtonForm.css';

import PrevButton from './PrevButton'
import NextButton from './NextButton'

class NaviButtonForm extends Component{

  render(){


    return(
      <div className="NaviButtonForm-template">
        <PrevButton/>
        <NextButton/>
      </div>

    );
  }


}


export default NaviButtonForm;
