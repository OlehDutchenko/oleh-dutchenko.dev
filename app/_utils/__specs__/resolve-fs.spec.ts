import { describe, expect, it } from 'vitest';
import { resolveCurrentFilePath, resolveCurrentFolder } from '../resolve-fs';

describe('Current file path resolvers', () => {
	it('resolveCurrentFilePath() should resolve current file path', () => {
		const filePath = resolveCurrentFilePath(import.meta.url);
		const match = filePath.endsWith('resolve-fs.spec.ts');
		expect(match).toBeTruthy();
	});

	it('resolveCurrentFolder() should resolve current folder path', () => {
		const dirPath = resolveCurrentFolder(import.meta.url);
		const match = dirPath.endsWith('__specs__');
		expect(match).toBeTruthy();
	});
});
