import React, {Component} from 'react';
import axios from 'axios';

import './BodyForm.css';

import DayListTemplate from '../calendar/DayListTemplate';
import InfoForm from '../BodyPart/InfoForm';
import DetailModal from '../DetailModal/DetailModal';


class BodyForm extends Component {



  constructor(props) {
    super(props);

    this.state = {
      detail: "",
      show: false,
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

    const {title, representation, startTime, endTime, place, summary, tags, markers, handleMouseEnterToItem, startDate, currentDate} = this.props;
    return(
      <div className="BodyForm-template">
        <DayListTemplate startDate={startDate} handleMouseEnterToItem={handleMouseEnterToItem} handleShow={this.handleShow} currentDate={currentDate}/>
        <InfoForm title={title} representation={representation} startTime={startTime} endTime={endTime}
          place={place} summary={summary} tags={tags} markers={markers} />
        <DetailModal show={this.state.show} handleClose={this.handleClose} title={title} representation={representation} startTime={startTime} endTime={endTime}
          place={place} summary={summary} tags={tags} detail={this.state.detail}/>
      </div>
    );
  }
}

export default BodyForm;
