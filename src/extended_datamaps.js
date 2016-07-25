import React from 'react';
import ReactDOM from 'react-dom';
import Datamaps from 'datamaps';
import d3 from 'd3';

export default class ExtendedDatamaps extends Datamaps {

	updatePopup(element, d, options) {
		const self     = this,
					data     = JSON.parse(element.attr('data-info')),
					reactObj = options.popupTemplate(d, data);

		if (!React.isValidElement(reactObj)) {
			return super.updatePopup(element, d, options);
		}

		const hoverObj = d3.select(self.svg[0][0].parentNode).select('.datamaps-hoverover');

		element.on('mousemove', null);
		element.on('mouseenter', null);
		element.on('mouseleave', null);

		element.on('mouseenter', function() {
			hoverObj.style('display', 'block');
			ReactDOM.render(reactObj, hoverObj[0][0]);
		});

		element.on('mousemove', function() {
			let position = d3.mouse(self.options.element);

			hoverObj
				.style('top', (position[1] + 30) + "px")
				.style('left', position[0] + "px");
		});

		element.on('mouseleave', function() {
			hoverObj
				.style('display', 'none')
				.html('');
		});
	}

}
