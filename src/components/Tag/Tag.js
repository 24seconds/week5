import React, { Component } from 'react';

class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.tag}
            </div>
        );
    }
}

export default Tag;