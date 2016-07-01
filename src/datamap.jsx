import React from 'react';
import Datamaps from 'datamaps';

export default class Datamap extends React.Component {

	static propTypes = {
		arc: React.PropTypes.array,
		arcOptions: React.PropTypes.object,
		bubbleOptions: React.PropTypes.object,
		bubbles: React.PropTypes.array,
		data: React.PropTypes.object,
		graticule: React.PropTypes.bool,
		height: React.PropTypes.any,
		labels: React.PropTypes.bool,
		style: React.PropTypes.object,
		updateChoroplethOptions: React.PropTypes.object,
		width: React.PropTypes.any
	};

	componentDidMount() {
		this.drawMap();
	}

	componentWillReceiveProps(newProps) {
		if (
			this.props.height !== newProps.height
			|| this.props.width !== newProps.width
		) {
			this.clear();
		}

		let modifiedProps = {}

		// filters down to just new props.
		for (var key in newProps) {
			if (newProps[key] !== this.props[key]) {
				modifiedProps[key] = newProps[key]
			}
		}

		this.drawMap(modifiedProps);
	}

	componentDidUpdate() {
		this.drawMap();
	}

	componentWillUnmount() {
		this.clear();
	}

	clear() {
		const { container } = this.refs;

		for (const child of Array.from(container.childNodes)) {
			container.removeChild(child);
		}

		delete this.map;
	}

	drawMap() {
		const {
			arc,
			arcOptions,
			bubbles,
			bubbleOptions,
			data,
			graticule,
			labels,
			updateChoroplethOptions,
			...props
		} = this.props;

		let map = this.map;

		if (!map) {
			map = this.map = new Datamaps({
				...props,
				data,
				element: this.refs.container
			});
		} else {
			map.updateChoropleth(data, updateChoroplethOptions);
		}

		if (arc) {
			map.arc(arc, arcOptions);
		}

		if (bubbles) {
			map.bubbles(bubbles, bubbleOptions);
		}

		if (graticule) {
			map.graticule();
		}

		if (labels) {
			map.labels();
		}
	}

	render() {
		const style = {
			height: '100%',
			position: 'relative',
			width: '100%',
			...this.props.style
		};

		return <div ref="container" style={style} />;
	}

}
