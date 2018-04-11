var path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const dest = path.resolve(__dirname, "dist");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: "./src/index.ts",
	output: {
		filename: "index.js",
		path: path.resolve(dest, "src")
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	plugins: [
		new CopyWebpackPlugin([{from: "./index.html", to: dest}])
	]
};
