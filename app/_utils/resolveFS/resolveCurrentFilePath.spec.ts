import { describe, expect, it } from 'vitest';
import { resolveCurrentFilePath } from './resolveCurrentFilePath';

describe('resolveCurrentFilePath', () => {
	it('should resolve current file path', () => {
		const filePath = resolveCurrentFilePath(import.meta.url);
		const match = filePath.endsWith('.spec.ts');
		expect(match).toBeTruthy();
	});
});
