import React from 'react';

import Datamap from '../src';
import Example from './example';

export default class StateLabelsExample extends React.Component {

	render() {
		return (
			<Example label="State Labels">
				<Datamap
					scope="usa"
					geographyConfig={{
						highlightBorderColor: '#bada55',
						popupTemplate: (geography, data) =>
							`<div class='hoverinfo'>${geography.properties.name}\nElectoral Votes: ${data.electoralVotes}`,
						highlightBorderWidth: 3
					}}
					fills={{
						'Republican': '#cc4731',
						'Democrat': '#306596',
						'Heavy Democrat': '#667faf',
						'Light Democrat': '#a9c0de',
						'Heavy Republican': '#ca5e5b',
						'Light Republican': '#eaa9a8',
						'defaultFill': '#eddc4e'
					}}
					data={{
						AZ: {
							fillKey: 'Republican',
							electoralVotes: 5
						},
						CO: {
							fillKey: 'Light Democrat',
							electoralVotes: 5
						},
						DE: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						FL: {
							fillKey: 'UNDECIDED',
							electoralVotes: 29
						},
						GA: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						HI: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						ID: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						IL: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						IN: {
							fillKey: 'Republican',
							electoralVotes: 11
						},
						IA: {
							fillKey: 'Light Democrat',
							electoralVotes: 11
						},
						KS: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						KY: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						LA: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						MD: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						ME: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						MA: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						MN: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						MI: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						MS: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						MO: {
							fillKey: 'Republican',
							electoralVotes: 13
						},
						MT: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						NC: {
							fillKey: 'Light Republican',
							electoralVotes: 32
						},
						NE: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						NV: {
							fillKey: 'Heavy Democrat',
							electoralVotes: 32
						},
						NH: {
							fillKey: 'Light Democrat',
							electoralVotes: 32
						},
						NJ: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						NY: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						ND: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						NM: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						OH: {
							fillKey: 'UNDECIDED',
							electoralVotes: 32
						},
						OK: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						OR: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						PA: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						RI: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						SC: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						SD: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						TN: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						TX: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						UT: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						WI: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						VA: {
							fillKey: 'Light Democrat',
							electoralVotes: 32
						},
						VT: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						WA: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						WV: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						WY: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						CA: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						CT: {
							fillKey: 'Democrat',
							electoralVotes: 32
						},
						AK: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						AR: {
							fillKey: 'Republican',
							electoralVotes: 32
						},
						AL: {
							fillKey: 'Republican',
							electoralVotes: 32
						}
					}}
					labels
				/>
			</Example>
		);
	}

}
