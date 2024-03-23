import { describe, expect, it } from 'vitest';
import { readMarkdownFile } from './readMarkdownFile';

describe('readMarkdownFile', () => {
	it('should read and return content from the child file', () => {
		const file = readMarkdownFile(import.meta.url, 'uk');
		expect(file.trim()).toBe('# Привіт світ!');
	});

	it('should throw an error when trying to read non-existent file', () => {
		expect(() => {
			readMarkdownFile(import.meta.url, 'non-existent-locale');
		}).toThrowError();
	});
});
