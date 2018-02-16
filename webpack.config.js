const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
module.exports = {
	entry:{
		novuTester: ['./src',]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		// publicPath: 'build/',
		filename: 'bundle.js',
		library: 'novuTester',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
        test: /(\.jsx|\.js)$/,
        use: {
					loader: 'babel-loader',
					query: {
						presets:[ 'es2015', 'stage-2' ]
					}
				},
				exclude: /(node_modules)/,
				
      },
			{
				test: /\.scss$|.css$/,
				// use: ['style-loader','css-loader']
				// use: ExtractTextPlugin.extract({
				// 	use: 'css-loader',
				// 	fallback: 'style-loader',
				// }),
				use: ExtractTextPlugin.extract({
					use: {
						loader:'css-loader',
						query: {
							// minimize: true,
							// modules: true,
							importLoaders: true,
							// localIdentName: '[hash:6]'
						}
					},
					fallback: 'style-loader',
				}),
			},
			// {
			// 	test: /\/components\/\*.css$/,
			// 	use: extractCSS.extract([ 'css-loader', 'style-loader' ])
			// }
		],
	},
	plugins: [
		new ExtractTextPlugin("novuTester.css"),
		extractCSS
	]
};
