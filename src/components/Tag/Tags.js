import React, { Component } from 'react';
import Tag from './Tag'
import './Tags.css'

class Tags extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const tagList = this.props.tags.map(
            ({tag}) => (
                <Tag tag={tag}/>
            )
        );

        return (
            <div className="Tags-template">
              {tagList}
            </div>
        );
    }
}

export default Tags;
