import React from 'react';

export default class Example extends React.Component {

	static propTypes = {
		children: React.PropTypes.element.isRequired,
		label: React.PropTypes.string.isRequired,
		mapStyle: React.PropTypes.object
	};

	render() {
		return (
			<div className="Example">
				<h3 className="Example-label">{this.props.label}</h3>
				<div
					className="Example-map"
					style={this.props.mapStyle}
				>
					{React.Children.only(this.props.children)}
				</div>
			</div>
		);
	}

}
