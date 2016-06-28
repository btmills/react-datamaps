import React from 'react';
import ReactDOM from 'react-dom';

import ArcsExample from './arcs-example';
import BasicExample from './basic-example';
import BubblesExample from './bubbles-example';
import ChoroplethExample from './choropleth-example';
import ProjectionsGraticulesExample from './projections-graticules-example.jsx';
import StateLabelsExample from './state-labels-example';
import ZoomExample from './zoom-example';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<BasicExample />
				<ChoroplethExample />
				<StateLabelsExample />
				<BubblesExample />
				<ArcsExample />
				<ProjectionsGraticulesExample />
				<ZoomExample />
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
