import React, { Component } from 'react';
import TimestampButton from './TimestampButton';
import List from './List';

class TimestampList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            items: []
        };
    }

    render() {
        return (
            <div>
                <h1>Timestamp</h1>
                <TimestampButton 
                    onClick={this._onClick}
                />
                <div>
                    <List />
                </div>
            </div>
        );
    }

    _onClick = event => {
        event.preventDefault();
        this.setState({
            items: [...this.state.items]
        })
    }

}

export default TimestampList;