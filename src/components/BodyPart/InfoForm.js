import React, {Component} from 'react';
import './InfoForm.css';

import EventInfo from '../EventInfo/EventInfo'
import Map from '../Map/Map'

class InfoForm extends Component {
  render(){
    const {title, representation, startTime, endTime, place, summary, tags, markers} = this.props;

    return(
      <div claaName="InfoForm-template">
        <Map markers = {markers}/>
        <EventInfo title={title} representation={representation} startTime={startTime}
          endTime={endTime} place={place} summary={summary} tags={tags}/>
      </div>

    );
  }
}

export default InfoForm;
