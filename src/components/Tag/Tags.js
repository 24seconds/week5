import React, { Component } from 'react';
import Tag from './Tag'
import './Tag.css'

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
            <ul >
                <li>{tagList}</li>
            </ul>
        );
    }
}

export default Tags;

