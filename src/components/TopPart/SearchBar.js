import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

import './SearchBar.css';

class SearchBar extends Component {

  // state = {
  //   filter_keywords: [],
  //   filter_tags: []
  // }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(event) {
    let inputs = event.target.value.split(" ");

    let filter_keywords = [];
    let filter_tags = [];

    for(let i=0; i<inputs.length; i++) {
      if(inputs[i] === '') continue;
      if(inputs[i].charAt(0) === '#') filter_tags.push(inputs[i].slice(1));
      else filter_keywords.push(inputs[i]);
    }

    // this.setState({
    //   filter_keywords: filter_keywords,
    //   filter_tags: filter_tags
    // });
    console.log('====================================');
    console.log(filter_tags, filter_keywords);
    console.log('====================================');

    this.setState({
      filter_keywords: filter_keywords,
      filter_tags: filter_tags
    });

    // this.props.handleSearchUpdate(filter_tags, filter_keywords);
  }

  handleButton() {
    this.props.handleSearchUpdate(this.state.filter_tags, this.state.filter_keywords);
  }

  render() {
    return(
      <div className="SearchBar-template">
        <input onChange={this.handleChange}/>
        <Button className="SearchBar-create-button" onClick={this.handleButton}>
          검색
        </Button>
      </div>

    );
  }

}

export default SearchBar;
