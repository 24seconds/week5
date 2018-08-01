import React, {Component} from 'react';
import axios from 'axios';

import './BodyForm.css';

import DayListTemplate from '../calendar/DayListTemplate';
import InfoForm from '../BodyPart/InfoForm';

class BodyForm extends Component {
  constructor(props) {
    super(props);

    // this.updateEventInfo = this.updateEventInfo.bind(this);
    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    
  }

  
  // handleShow(event_id) {
  //   axios.get('http://52.231.64.73:3001/events/detailbyid', {
  //       params: {
  //         id: event_id
  //       }
  //     })
  //     .then(response => {
  //       if(response.data.success) {
  //         this.setState({
  //           detail: response.data.detail,
  //           show: true
  //         });
  //       }
  //     });
  // }

  render() {

    const {title, representation, startTime, endTime, place, summary, tags, markers, handleMouseEnterToItem, startDate, currentDate, filter_tags, filter_keywords} = this.props;
    return(
      <div className="BodyForm-template">
        <DayListTemplate startDate={startDate} handleMouseEnterToItem={handleMouseEnterToItem} currentDate={currentDate} filter_tags={filter_tags} filter_keywords={filter_keywords} 
          title={title} representation={representation} startTime={startTime} endTime={endTime} place={place} summary={summary} tags={tags} />
        <InfoForm title={title} representation={representation} startTime={startTime} endTime={endTime}
          place={place} summary={summary} tags={tags} markers={markers} />
      </div>
    );
  }
}

export default BodyForm;
