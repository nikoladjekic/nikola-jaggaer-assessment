const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "@svgr/webpack",
						options: {
							svgoConfig: {
								plugins: [
									{ name: "removeViewBox", active: false },
								],
							},
						},
					},
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext]",
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	devServer: {
		port: "4004",
		static: {
			directory: path.join(__dirname, "dist"),
		},
		hot: true,
		open: true,
	},
};
