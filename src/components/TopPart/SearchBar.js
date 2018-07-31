import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render(){

    return(
      <div className="SearchBar-template">
        <input />
        <div className="SearchBar-create-button">
          추가
        </div>
      </div>

    );
  }

}

export default SearchBar;
