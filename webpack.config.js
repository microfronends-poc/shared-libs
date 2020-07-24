const path = require('path');

module.exports = () => ({
	entry: './package.json', // just to have smth in entry point
	output: {
		publicPath: './shared-libs-importmap.json'
	},
	devServer: {
		historyApiFallback: true,
		disableHostCheck: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	}
});