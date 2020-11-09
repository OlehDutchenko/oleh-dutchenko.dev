// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const fromCWD = require('from-cwd');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const envSetup = require('./lib/envSetup');

// -----------------------------------------------------------------------------
// Next.js config
// @see {@link https://nextjs.org/docs/api-reference/next.config.js/introduction}
// -----------------------------------------------------------------------------

module.exports = (phase, { defaultConfig }) => ({
	env: envSetup(phase),
	pageExtensions: ['tsx', 'ts'],
	sassOptions: {
		includePaths: ['./node_modules']
	},
	webpack(config, { isServer }) {
		// tsconfig.json -> compilerOptions.baseUrl
		const srcFolder = fromCWD('./src/');
		config.resolve.modules.push(srcFolder);

		if (phase === PHASE_DEVELOPMENT_SERVER && !isServer) {
			config.plugins.push(
				new ForkTsCheckerWebpackPlugin({
					async: true,
					formatter: 'codeframe',
					typescript: {
						configFile: fromCWD('./tsconfig.json')
					}
				})
			);
		}

		return config;
	}
});
