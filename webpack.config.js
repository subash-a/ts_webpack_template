var path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dest = path.resolve(__dirname, "dist");
const css_dest = path.resolve(dest, "style");
const js_dest = path.resolve(dest, "src");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: "./src/index.ts",
	output: {
		filename: "index.js",
		path: js_dest
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					},
						  {
							  loader: "sass-loader",
						  }]
				})
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	plugins: [
		new CopyWebpackPlugin([{from: "./index.html", to: dest}]),
		new ExtractTextPlugin("style/index.css"),
	]
};
