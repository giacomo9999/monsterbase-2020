import React, { Component } from 'react';

export default class Table extends Component {
    render() {
        return (
            <div>
                <p>{this.props.regionName}Encounter Table</p>
            </div>
        )
    }
}
