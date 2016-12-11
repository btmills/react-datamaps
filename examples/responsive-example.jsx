import React from 'react';

import Datamap from '../src';
import Example from './example';

const radius = 4;

export default class ResponsiveExample extends React.Component {

	render() {
		return (
			<Example additionalClasses="ResponsiveExample" label="Responsive">
				<Datamap
					responsive
					geographyConfig={{
						popupOnHover: false,
						highlightOnHover: false
					}}
					fills={{
						defaultFill: '#abdda4',
						bubbleFill: '#123456'
					}}
					bubbles={[
						{
							name: 'San Jose',
							radius,
							country: 'USA',
							latitude: 37.2966853,
							longitude: -122.0975973,
							fillKey: 'bubbleFill'
						},
						{
							name: 'Dulles',
							radius,
							country: 'USA',
							latitude: 38.9541077,
							longitude: -77.496101,
							fillKey: 'bubbleFill'
						},
						{
							name: 'London',
							radius,
							country: 'UK',
							latitude: 51.501364,
							longitude: -0.1440787,
							fillKey: 'bubbleFill'
						},
						{
							name: 'Buenos Aires',
							radius,
							latitude: -34.6157142,
							longitude: -58.5033602,
							fillKey: 'bubbleFill'
						},
						{
							name: 'Sydney',
							radius,
							latitude: -33.8567844,
							longitude: 151.213108,
							fillKey: 'bubbleFill'
						},
						{
							name: 'Hong Kong',
							radius,
							latitude: 22.3574372,
							longitude: 113.8408289,
							fillKey: 'bubbleFill'
						}
					]
					}
					bubbleOptions={{
						borderWidth: 1,
						borderColor: '#ABCDEF'
					}}
				/>
			</Example>
		);
	}

}
