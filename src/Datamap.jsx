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

	componentWillReceiveProps() {
		const container = this.refs.container;

		for (const child of Array.from(container.childNodes)) {
			container.removeChild(child);
		}
	},

	componentDidUpdate() {
		this.drawMap();
	},

	drawMap() {
		new Datamap(Object.assign({}, { ...this.props }, {
			element: this.refs.container
		}));
	},

	render() {
		const style = {
			position: 'relative'
		};

		return <div ref="container" style={style}></div>;
	}

});
