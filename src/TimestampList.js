import React, { Component } from 'react';
import TimestampButton from './TimestampButton';
import List from './List';
// import Moment from 'react-moment';
// import 'moment-timezone';

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
                    onSubmit={this._onSubmit}
                    term={this.state.term}
                />
                <div>
                    <h3>Previous Timestamps</h3>
                    <List 
                        items={this.state.items}
                    />
                </div>
            </div>
        );
    }

    _onSubmit = event => {
        event.preventDefault();
        console.log('submitted');
        let time = new Date();
        // console.log(time);
        let utcDate = time.toUTCString();
        console.log(utcDate);
        // console.log(typeof time);
        console.log(typeof utcDate);
        this.setState({
            term: utcDate,
            items: [...this.state.items, this.state.term]
        })
    }

}

export default TimestampList;