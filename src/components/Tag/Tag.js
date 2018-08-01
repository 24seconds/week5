import React, { Component } from 'react';

import './Tag.css';

class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Tag-template">
                #{this.props.tag}&nbsp;&nbsp;
            </div>
        );
    }
}

export default Tag;
