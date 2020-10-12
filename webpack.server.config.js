// Module export via CommonJS style
module.exports = env => {
	const config = {
		target: 'node',

		mode: env.NODE_ENV,

		entry: {
			server: './src/App.ts'
		},

		output: {
			filename: '[name].js',
			publicPath: '/'
		},

		// Resolving modules fix
		resolve: {
			extensions: ['.ts', '.tsx', '.js']
		},

		// Tell webpack to run babel on every file it runs through
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: ['ts-loader', 'eslint-loader']
				}
			]
		},

		optimization: {
			// We no not want to minimize our code.
			minimize: false
		},
	};

	return config;
};