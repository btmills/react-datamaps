import React from 'react';
import Datamap from 'datamaps';

export default React.createClass({

	displayName: 'Datamap',

	mapObject: undefined,

	propTypes: {
		arc: React.PropTypes.array,
		arcOptions: React.PropTypes.object,
		bubbleOptions: React.PropTypes.object,
		bubbles: React.PropTypes.array,
		graticule: React.PropTypes.bool,
		labels: React.PropTypes.bool,
		resetOnUpdateChoropleth: React.PropTypes.bool
	},

	defaultProps: {
		resetOnUpdateChoropleth: true
	},

	componentDidMount() {
		this.drawMap(this.props);
	},

	componentWillReceiveProps(props) {
		this.drawMap(this.props);
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

	drawMap(props) {
		let newMap = true;

		if (this.mapObject) {
			newMap = false;
		} else {
			this.mapObject = new Datamap(Object.assign({}, { ...props }, {
				element: this.refs.container
			}));
		}

		if (props.data && !newMap) {
			this.mapObject.updateChoropleth(props.data, {
				reset: props.resetOnUpdateChoropleth
			})
		}

		if (props.arc) {
			this.mapObject.arc(props.arc, props.arcOptions);
		}

		if (props.bubbles) {
			this.mapObject.bubbles(props.bubbles, props.bubbleOptions);
		}

		if (props.graticule) {
			this.mapObject.graticule();
		}

		if (props.labels) {
			this.mapObject.labels();
		}
	},

	render() {
		const style = {
			position: 'relative'
		};

		return <div ref="container" style={style}></div>;
	}

});
