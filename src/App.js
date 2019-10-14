import React, { Component } from 'react';
import CatComponent, { Component } from '../CatComponent';
import EinsteinQuoteComponent, { Component } from 'react';
import MouseComponent, { Component } from 'react';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
