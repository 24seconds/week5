import React, { Component } from 'react';
import {Popover, OverlayTrigger, Button, Modal, Tooltip} from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import Tags from '../Tag/Tags'
import './AddModal.css';


class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            startDate: moment(),
            startTime: moment().set('minute', 0).set('second', 0).add(1, 'hour'),
            endTime: moment().set('minute', 0).set('second', 0).add(2, 'hour'),
            place: null,
            latitude: null,
            longitude: null,
            summary: "",
            detail: "",
            tags: []
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
        this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
        this.handleChangePlace = this.handleChangePlace.bind(this);
        this.handleChangeLat = this.handleChangeLat.bind(this);
        this.handleChangeLng = this.handleChangeLng.bind(this);
        this.handleChangeSummary = this.handleChangeSummary.bind(this);
        this.handleChangeDetail = this. handleChangeDetail.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeStartTime(date) {
        this.setState({
            startTime: date
        });
    }

    handleChangeEndTime(date) {
        this.setState({
            endTime: date
        });
    }

    handleChangePlace(event) {
        this.setState({
            place: event.target.value
        })
    }

    handleChangeLat(event) {
        this.setState({
            latitude: event.target.value
        })
    }

    handleChangeLng(event) {
        this.setState({
            longitude: event.target.value
        })
    }

    handleChangeSummary(event) {
        this.setState({
            summary: event.target.value
        })
    }

    handleChangeDetail(event) {
        this.setState({
            detail: event.target.value
        })
    }

    handleAdd() {
        const {title, startDate, startTime, endTime, place, latitude, longitude, summary, detail, tags} = this.state;
        axios.post('http://52.231.64.73:3001/events/add', {
            creator_id: "master",
            title: title,
            date: startDate.format("YYYY-MM-DD"),
            start_time: startTime.format("HH:mm:ss"),
            end_time: endTime.format("HH:mm:ss"),
            place: place,
            latitude: latitude,
            longitude: longitude,
            summary: summary.replace("\n", "\r"),
            detail: detail.replace("\n", "\r"),
            tags: tags
        })
        .then(response => {
            if(response.data.success) {
                this.props.handleClose();
            } else {
                alert("실패");
            }
        });
    }


    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        // const {title, representation, startTime, endTime, place, summary, tags, detail} = this.props;

        return (
            
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>이벤트 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        이벤트 제목 : <input onChange={this.handleChangeTitle}/>
                    </div>
                    <div>
                        <DatePicker
                            // className='date-picker'
                            
                            dateFormat="YYYY년 MM월 DD일"
                            selected={this.state.startDate}
                            onChange={this.handleChangeDate}
                            todayButton={"오늘"}
                        />
                    </div>
                    <div>
                        <DatePicker
                            
                            selected={this.state.startTime}
                            onChange={this.handleChangeStartTime}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={5}
                            dateFormat="LT"
                            timeCaption="Start Time"
                        />
                        <DatePicker
                            
                            selected={this.state.endTime}
                            onChange={this.handleChangeEndTime}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={5}
                            dateFormat="LT"
                            timeCaption="End Time"
                        />
                    </div>
                    <div>
                        장소 : <input onChange={this.handleChangePlace}/>
                        <br/>위도 : <input onChange={this.handleChangeLat}/> 경도 : <input onChange={this.handleChangeLng}/>
                    </div>
                    <div>
                        요약<br/><textarea onChange={this.handleChangeSummary}/>
                    </div>
                    <div>
                        자세한 정보<br/><textarea onChange={this.handleChangeDetail}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                    <Button onClick={this.handleAdd}>등록</Button>
                </Modal.Footer>
            </Modal>
        );
        
    }
}

export default AddModal;
