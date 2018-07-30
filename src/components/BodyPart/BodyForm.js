import React, {Component} from 'react';
import './BodyForm.css';

import DayListTemplate from '../calendar/DayListTemplate'
import InfoForm from '../BodyPart/InfoForm'

class BodyForm extends Component {
  render(){
    const {title, representation, startTime, endTime, place, summary, tags, markers} = this.props;
    return(
      <div className="BodyForm-template">
        <DayListTemplate/>
        <InfoForm title={title} representation={representation} startTime={startTime} endTime={endTime}
          place={place} summary={summary} tags={tags} markers={markers} />
      </div>
    );
  }
}

export default BodyForm;
