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

                <div className="event-info-small">
                  <div className = "event-info-time">
                      <div >일시 : &nbsp;</div>
                      <div>{this.props.startTime.format("M월 DD일 HH:mm")}</div>
                      <div className="end-date">-{moment(this.props.endTime).format("HH:mm")}</div>
                  </div>
                  <div>장소 : &nbsp;{this.props.place} </div>
                </div>

                <br/>
                <div className="event-info-summary">{this.props.summary}</div>
                <div className = "event-info-representation">
                  <div>
                        Written By : {this.props.representation}&nbsp;
                  </div>
                  <div>
                    <Tags tags={this.props.tags}/>
                  </div>

                </div>
            </main>
        );
    }
}

export default EventInfo;
