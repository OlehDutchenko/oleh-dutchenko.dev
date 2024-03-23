import { describe, expect, it } from 'vitest';
import { resolveCurrentFolder } from './resolveCurrentFolder';

describe('resolveCurrentFolder', () => {
	it('should resolve current folder path', () => {
		const dirPath = resolveCurrentFolder(import.meta.url);
		const match = dirPath.endsWith('resolveFS');
		expect(match).toBeTruthy();
	});
});
