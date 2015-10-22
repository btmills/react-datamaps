import React from 'react';
import Datamap from 'datamaps';

export default React.createClass({

	displayName: 'Datamap',

	propTypes: {
		height: React.PropTypes.number,
		scope: React.PropTypes.oneOf(['usa', 'world']),
		width: React.PropTypes.number
	},

	getDefaultProps() {
		return {
			height: 300,
			scope: 'world',
			width: 500
		};
	},

	componentDidMount() {
		this.drawMap();
	},

	componentDidUpdate() {
		this.drawMap();
	},

	drawMap() {
		new Datamap({
			element: this.refs.container,
			scope: this.props.scope
		});
	},

	render() {
		const { height, width } = this.props;

		const style = {
			position: 'relative',
			height,
			width
		};

		return <div ref="container" style={style}></div>;
	}

});
