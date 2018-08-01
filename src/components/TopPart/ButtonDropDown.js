import React, {Component} from 'react';
import './ButtonDropDown.css';
import {} from 'react-bootstrap';
import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

// <MenuItem eventKey="3" active>
//   Active Item
// </MenuItem>

// <DropdownButton className='ButtonDropDown-template' bsStyle='primary' title='Week' id='123123123123'>
//   <MenuItem eventKey="1">Day</MenuItem>
//   <MenuItem eventKey="2">Week</MenuItem>
//   <MenuItem eventKey="3">Month</MenuItem>
//   <MenuItem eventKey="4">Year</MenuItem>
//
// </DropdownButton>


class ButtonDropDown extends Component{

  render(){

    return(
      <div className="ButtonDropDown-template">
        <Dropdown>
          <Dropdown.Toggle btnStyle="link" title="Week" />
          <Dropdown.Menu>
            <MenuItem eventKey="1">Day</MenuItem>
            <MenuItem eventKey="2">Week</MenuItem>
            <MenuItem eventKey="3">Month</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    );
  }
}

export default ButtonDropDown;
