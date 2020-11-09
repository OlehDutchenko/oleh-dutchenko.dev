/**
 * @fileOverview Кастомный парс `.env` файлов
 */

// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const fs = require('fs');
const dotenv = require('dotenv');
const chalk = require('chalk');
const fromCWD = require('from-cwd');
const { modes, keyPrefix } = require('./constants');

// -----------------------------------------------------------------------------
// Get vars
// -----------------------------------------------------------------------------

/**
 * @param {string} phase
 * @returns {Object}
 */
const envSetup = (phase) => {
	const dotEnvMode = modes[phase];
	// приоритет файлов
	// .env
	// .env.local
	// .env.[mode]
	// .env.[mode].local
	// -----------------------
	// где [mode] - production или development
	const dotEnvConfigs = [
		'.env',
		'.env.local',
		dotEnvMode ? `.env.${dotEnvMode}` : false,
		dotEnvMode ? `.env.${dotEnvMode}.local` : false
	]
		.filter(Boolean)
		.map((file) => {
			const path = fromCWD(file);
			if (fs.existsSync(path)) {
				return dotenv.config({ path }).parsed || {};
			} else {
				return {};
			}
		});

	const mergedConfigs = Object.assign({}, ...dotEnvConfigs);
	const config = {};

	// преобразовываем значения полей APP_***
	for (const key in mergedConfigs) {
		if (
			mergedConfigs.hasOwnProperty(key) &&
			key.startsWith(keyPrefix) &&
			typeof mergedConfigs[key] === 'string'
		) {
			const value = mergedConfigs[key];
			const valueLower = value.toLowerCase();
			// получаем boolean, null, number, string или массив
			if (
				valueLower === 'true' ||
				valueLower === 'false' ||
				valueLower === 'null' ||
				valueLower.startsWith('[')
			) {
				try {
					config[key] = JSON.parse(valueLower);
				} catch (e) {
					console.log(valueLower);
					console.log(e);
					process.exit(1);
				}
			} else if (Number.isFinite(+value)) {
				config[key] = +value;
			} else {
				config[key] = value;
			}
		} else {
			console.log(chalk.red('.env ignore key:') + ' ' + key);
		}
	}
	return config;
};

module.exports = envSetup;
