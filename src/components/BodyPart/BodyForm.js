import React, {Component} from 'react';
import axios from 'axios';

import './BodyForm.css';

import DayListTemplate from '../calendar/DayListTemplate';
import InfoForm from '../BodyPart/InfoForm';
import DetailModal from '../Modals/DetailModal';

class BodyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: "",
      
    }

    // this.updateEventInfo = this.updateEventInfo.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(event_id) {
    axios.get('http://52.231.64.73:3001/events/detailbyid', {
        params: {
          id: event_id
        }
      })
      .then(response => {
        if(response.data.success) {
          this.setState({
            detail: response.data.detail,
            show: true
          });
        }
      });
  }

  render() {

    const {title, representation, startTime, endTime, place, summary, tags, markers, handleMouseEnterToItem, startDate, currentDate, filter_tags, filter_keywords} = this.props;
    return(
      <div className="BodyForm-template">
        <DayListTemplate startDate={startDate} handleMouseEnterToItem={handleMouseEnterToItem} handleShow={this.handleShow} currentDate={currentDate} filter_tags={filter_tags} filter_keywords={filter_keywords} />
        <InfoForm title={title} representation={representation} startTime={startTime} endTime={endTime}
          place={place} summary={summary} tags={tags} markers={markers} />
        <DetailModal show={this.state.show} handleClose={this.handleClose} title={title} representation={representation} startTime={startTime} endTime={endTime}
          place={place} summary={summary} tags={tags} detail={this.state.detail}/>
      </div>
    );
  }
}

export default BodyForm;