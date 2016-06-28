/* global d3 */

import React from 'react';

import Datamap from '../src';
import Example from './example';

const colors = d3.scale.category10();

export default class ZoomExample extends React.Component {

	setProjection(element) {
		const projection = d3.geo.equirectangular()
			.center([23, -3])
			.rotate([4.4, 0])
			.scale(400)
			.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
		const path = d3.geo.path()
			.projection(projection);

		return { path, projection };
	}

	render() {
		return (
			<Example label="Zoom">
				<Datamap
					scope="world"
					setProjection={this.setProjection}
					fills={{
						defaultFill: '#abdda4',
						gt50: colors(Math.random() * 20),
						eq50: colors(Math.random() * 20),
						lt25: colors(Math.random() * 10),
						gt75: colors(Math.random() * 200),
						lt50: colors(Math.random() * 20),
						eq0: colors(Math.random() * 1),
						pink: '#0fa0fa',
						gt500: colors(Math.random() * 1)
					}}
					data={{
						ZAF: { fillKey: 'gt50' },
						ZWE: { fillKey: 'lt25' },
						NGA: { fillKey: 'lt50' },
						MOZ: { fillKey: 'eq50' },
						MDG: { fillKey: 'eq50' },
						EGY: { fillKey: 'gt75' },
						TZA: { fillKey: 'gt75' },
						LBY: { fillKey: 'eq0' },
						DZA: { fillKey: 'gt500' },
						SSD: { fillKey: 'pink' },
						SOM: { fillKey: 'gt50' },
						GIB: { fillKey: 'eq50' },
						AGO: { fillKey: 'lt50' }
					}}
					bubbles={[
						{
							name: 'Bubble 1',
							latitude: 21.32,
							longitude: -7.32,
							radius: 45,
							fillKey: 'gt500'
						},
						{
							name: 'Bubble 2',
							latitude: 12.32,
							longitude: 27.32,
							radius: 25,
							fillKey: 'eq0'
						},
						{
							name: 'Bubble 3',
							latitude: 0.32,
							longitude: 23.32,
							radius: 35,
							fillKey: 'lt25'
						},
						{
							name: 'Bubble 4',
							latitude: -31.32,
							longitude: 23.32,
							radius: 55,
							fillKey: 'eq50'
						}
					]}
					bubbleOptions={{
						popupTemplate: (geo, data) =>
							`<div class="hoverinfo">Bubble for ${data.name}`
					}}
				/>
			</Example>
		);
	}

}
