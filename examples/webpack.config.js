'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',

	entry: './index.jsx',

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: './bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],

	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.jsx?$/,
				include: [
					__dirname,
					path.resolve(__dirname, '../src')
				],
				loader: 'babel'
			}
		]
	},
	resolve: {
		root: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, '../node_modules')
		],
		extensions: ['', '.js', '.jsx']
	},
	resolveLoader: {
		root: path.resolve(__dirname, 'node_modules')
	}
};
