import React from 'react';

import Datamap from '../src';
import Example from './example';

export default class BubblesExample extends React.Component {

	render() {
		return (
			<Example label="Bubbles">
				<Datamap
					geographyConfig={{
						popupOnHover: false,
						highlightOnHover: false
					}}
					fills={{
						defaultFill: '#abdda4',
						USA: 'blue',
						RUS: 'red'
					}}
					bubbles={[
						{
							name: 'Not a bomb, but centered on Brazil',
							radius: 23,
							centered: 'BRA',
							country: 'USA',
							yeild: 0,
							fillKey: 'USA',
							date: '1954-03-01'
						},
						{
							name: 'Castle Bravo',
							radius: 25,
							yeild: 15000,
							country: 'USA',
							significance: 'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
							fillKey: 'USA',
							date: '1954-03-01',
							latitude: 11.415,
							longitude: 165.1619
						},
						{
							name: 'Tsar Bomba',
							radius: 70,
							yeild: 50000,
							country: 'USSR',
							fillKey: 'RUS',
							significance: 'Largest thermonuclear weapon ever tested-scaled down from its initial 100Mt design by 50%',
							date: '1961-10-31',
							latitude: 73.482,
							longitude: 54.5854
						}
					]}
					bubbleOptions={{
						popupTemplate: (geo, data) =>
							`<div class="hoverinfo">Yield: ${data.yeild}\nExploded on ${data.date} by the ${data.country}`
					}}
				/>
			</Example>
		);
	}

}
