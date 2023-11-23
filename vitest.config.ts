import reactPlugin from '@vitejs/plugin-react';
import fromCwd from 'from-cwd';
import { defineConfig } from 'vitest/config';

const config = defineConfig({
	plugins: [reactPlugin()],
	resolve: {
		alias: {
			'@': fromCwd('app'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		passWithNoTests: true,
		clearMocks: true,
		setupFiles: ['./vitest.setup.ts'],
		coverage: {
			enabled: false,
			all: false,
			provider: 'istanbul',
			include: ['app/**'],
			reporter: ['json-summary', 'html'],
		},
	},
});

export { config as default };
