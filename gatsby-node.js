exports.onCreateWebpackConfig = ({actions, loaders}) => {
	actions.setWebpackConfig({
		module: {
			rules: [
				{
					test: /\.node$/,
					use: ["node-loader"],
				},
				{
					test: /react-file-viewer/,
					use: loaders.null(),
				},
			],
		},
	});
};
