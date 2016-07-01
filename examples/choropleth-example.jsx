/* global d3 */

import React from 'react';

import Datamap from '../src';
import Example from './example';

const colors = d3.scale.category10();

export default class ChoroplethExample extends React.Component {

	state = {
		data: {
			USA: { fillKey: 'authorHasTraveledTo' },
			JPN: { fillKey: 'authorHasTraveledTo' },
			ITA: { fillKey: 'authorHasTraveledTo' },
			CRI: { fillKey: 'authorHasTraveledTo' },
			KOR: { fillKey: 'authorHasTraveledTo' },
			DEU: { fillKey: 'authorHasTraveledTo' }
		}
	};

	componentDidMount() {
		this.update();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	update() {
		this.interval = setInterval(() => {
			this.setState({
				data: {
					USA: colors(Math.random() * 10),
					RUS: colors(Math.random() * 100),
					AUS: { fillKey: 'authorHasTraveledTo' },
					BRA: colors(Math.random() * 50),
					CAN: colors(Math.random() * 50),
					ZAF: colors(Math.random() * 50),
					IND: colors(Math.random() * 50)
				}
			});
		}, 2000);
	}

	render() {
		return (
			<Example label="Choropleth">
				<Datamap
					data={this.state.data}
					fills={{
						defaultFill: '#abdda4',
						authorHasTraveledTo: '#fa0fa0'
					}}
					projection="mercator"
					updateChoroplethOptions={{ reset: false }}
				/>
			</Example>
		);
	}

}
