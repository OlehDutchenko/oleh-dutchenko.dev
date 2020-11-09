// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const envSetup = require('../index');
const { modes, keyPrefix } = require('../constants');

// -----------------------------------------------------------------------------
// Get vars
// -----------------------------------------------------------------------------

describe('Parsed ENV object ', () => {
	describe(`all props must starts with \`${keyPrefix}\``, () => {
		Object.entries(modes).forEach(([phase, mode]) => {
			test(`Phase: ${phase}. Mode: ${mode}`, () => {
				const env = envSetup(phase);
				const every = Object.keys(env).every((key) => key.startsWith(keyPrefix));
				expect(every).toBeTruthy();
			});
		});
	});
});
