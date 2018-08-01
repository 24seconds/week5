import React, { Component } from 'react';

import { Menu, MainButton, ChildButton } from 'react-mfb'
import 'react-mfb/mfb.css'
import AddModal from '../Modals/AddModal'

class FloatingButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        console.log('====================================');
        console.log("handle show in fab");
        console.log('====================================');
        this.setState({ show: true });
    }
  
    render() {
        var effect = 'slidein-spring',
            pos = 'br',
            method = 'hover';

        return(
            <div>
                <AddModal show={this.state.show} handleClose={this.handleClose} />
                <Menu effect={effect} method={method} position={pos}>
                    <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
                    <ChildButton
                        //onClick={function(e){ console.log(e); e.preventDefault(); }}
                        icon="ion-social-github"
                        label="새 이벤트 등록"
                        onClick={this.handleShow} />
                    {/* <ChildButton
                        icon="ion-social-octocat"
                        label="Follow me on Github"
                        href="https://github.com/nobitagit" /> */}
                </Menu>
            </div>
        );
    }
}
  
export default FloatingButton;
  