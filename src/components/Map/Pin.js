import React, { Component } from 'react';
import './Pin.css'

class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let left = this.props.lat * 19977.42664 - 726378.82415 + "px";
        let top = - this.props.lng * 45990.22708 + 5857295.38373 + "px";
        return (
            <div className = "pin" style = {{marginLeft: left, marginTop: top}}>
                <div className = "pin-box">
                    <span className = "pin-text">{this.props.text}</span>
                </div>
                <div className = "pin-arrow-shadow"></div>
                <div className = "pin-arrow"></div>
            </div>
        );
    }
}

export default Tag;