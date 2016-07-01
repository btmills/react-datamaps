import React from 'react';

import Datamap from '../src';
import Example from './example';

export default class BasicExample extends React.Component {

	render() {
		return (
			<Example label="Basic">
				<Datamap />
			</Example>
		);
	}

}
