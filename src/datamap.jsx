import React from 'react';
import Datamap from 'datamaps';

export default React.createClass({

	displayName: 'Datamap',

	propTypes: {
		arc: React.PropTypes.array,
		arcOptions: React.PropTypes.object,
		bubbleOptions: React.PropTypes.object,
		bubbles: React.PropTypes.array,
		graticule: React.PropTypes.bool,
		labels: React.PropTypes.bool
	},

	componentDidMount() {
		this.drawMap();
	},

	componentWillReceiveProps() {
		this.clear();
	},

	componentDidUpdate() {
		this.drawMap();
	},

	componentWillUnmount() {
		this.clear();
	},

	clear() {
		const container = this.refs.container;

		for (const child of Array.from(container.childNodes)) {
			container.removeChild(child);
		}
	},

	drawMap() {
		const map = new Datamap(Object.assign({}, { ...this.props }, {
			element: this.refs.container
		}));

		if (this.props.arc) {
			map.arc(this.props.arc, this.props.arcOptions);
		}

		if (this.props.bubbles) {
			map.bubbles(this.props.bubbles, this.props.bubbleOptions);
		}

		if (this.props.graticule) {
			map.graticule();
		}

		if (this.props.labels) {
			map.labels();
		}
	},

	render() {
		const style = {
			position: 'relative'
		};

		return <div ref="container" style={style}></div>;
	}

});
