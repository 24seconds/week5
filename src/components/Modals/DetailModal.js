import React, { Component } from 'react';
import {Image, Popover, OverlayTrigger, Button, Modal, Tooltip} from 'react-bootstrap';
import moment from 'moment';
import Tags from '../Tag/Tags'
import './DetailModal.css';

import Icon from '../../images/star_blank.png'
import Icon2 from '../../images/star_yellow.png'

class DetailModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
              very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        const {title, representation, startTime, endTime, place, summary, tags, detail} = this.props;

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
              <Modal.Header className='DetailModal-Header' closeButton>
                  <Modal.Title>{title}</Modal.Title>
                  <div className='DetailModal-star-template'>
                    <button className='DetailModal-star'>
                      <Image
                        src={require('../../images/star_yellow.png')} responsive
                        onClick = {() => console.log('asdfa')} />
                    </button>
                  </div>


              </Modal.Header>


                <Modal.Body>
                    <h4>일시</h4>
                    <p>
                        {startTime.format("M월 DD일 HH시 mm분")}~{moment(endTime).format("M월 DD일 HH시 mm분")}
                    </p>

                    <h4>장소</h4>
                    <p>
                        {place}
                    </p>

                    <h4>태그</h4>
                    <Tags tags={tags}/>

                    <hr />

                    <h4>이벤트 설명</h4>
                    <p>
                        {summary.split('\r').map( line => {
                            return (<span>{line}<br/></span>)
                        })}
                    </p>
                    <hr />
                    <p>
                        {detail.split('\r').map( line => {
                            return (<span>{line}<br/></span>)
                        })}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );

    }
}

export default DetailModal;
