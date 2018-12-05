import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TimestampList from './TimestampList';
// import Moment from 'react-moment';
// import 'moment-timezone';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TimestampList />
			</div>
		);
	}
}

export default App;
