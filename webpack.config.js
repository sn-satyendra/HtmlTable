const path = require('path');

// For now only js files are configured.
module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			}
		]
	},
	resolve: {
		extensions: ['.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		filename: 'index.js',
		libraryTarget: 'umd'
	}
};
