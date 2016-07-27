/* global d3 */
import React from 'react';
import Datamaps from 'datamaps';

const BUBBLE_SELECTOR = '.datamaps-bubble';

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
		onBubbleClick: React.PropTypes.func,
		style: React.PropTypes.object,
		updateChoroplethOptions: React.PropTypes.object,
		width: React.PropTypes.any
	};

	componentDidMount() {
		this.drawMap();
		if (this.props.onBubbleClick) {
			const { onBubbleClick } = this.props;

			d3.selectAll(BUBBLE_SELECTOR).on('click', onBubbleClick);
		}
	}

	componentWillReceiveProps(newProps) {
		if (
			this.props.height !== newProps.height
			|| this.props.width !== newProps.width
		) {
			this.clear();
		}
	}

	componentDidUpdate() {
		this.drawMap();
		if (this.props.onBubbleClick) {
			const { onBubbleClick } = this.props;

			d3.selectAll(BUBBLE_SELECTOR).on('click', onBubbleClick);
		}
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
