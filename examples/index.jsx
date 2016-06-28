import React from 'react';
import ReactDOM from 'react-dom';

import Datamap from '../src';

class App extends React.Component {

	state = {
		height: 300,
		scope: 'world',
		width: 500
	};

	handleUpdate = () => {
		this.setState(Object.assign({}, {
			height: parseInt(this.refs.height.value, 10) || null,
			scope: this.refs.scope.value || null,
			width: parseInt(this.refs.width.value, 10) || null
		}, window.example));
	};

	render() {
		return (
			<div className="App">
				<div className="App-options">
					<label>Height <input ref="height" type="number" /></label>
					<label>Scope <input ref="scope" type="text" /></label>
					<label>Width <input ref="width" type="number" /></label>
					<button onClick={this.handleUpdate}>Update</button>
				</div>
				<div className="App-map">
					<Datamap {...this.state} />
				</div>
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
