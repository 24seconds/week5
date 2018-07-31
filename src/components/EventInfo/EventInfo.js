import React, { Component } from 'react';
import moment from 'moment';
import Tags from '../Tag/Tags';
import './EventInfo.css'

class EventInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className = "event-info-wrap">
                <div className = "event-info-title">
                    {this.props.title}
                </div>

                <div className = "event-info-representation">
                    {this.props.representation}
                </div>

                <div>
                    <div className = "event-info-small">일시:</div>
                    <div>{this.props.startTime.format("M월 DD일 HH시 mm분")}</div>
                    <div className="end-date">~{moment(this.props.endTime).format("M월 DD일 HH시 mm분")}</div>
                </div>
                <div>장소: {this.props.place}</div>

                <Tags tags={this.props.tags}/>

                <div>{this.props.summary}</div>
            </main>
        );
    }
}

export default EventInfo;
