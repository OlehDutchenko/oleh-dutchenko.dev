import fromCWD from 'from-cwd';
import { describe, expect, it } from 'vitest';
import { MarkdownFolder } from '../markdown-folder';

describe('MarkdownFolder', () => {
	it('should read and return content from the child file', () => {
		const markdownFolder = new MarkdownFolder({
			path: fromCWD('./app/_utils/__specs__/fixtures/md')
		});
		let content = markdownFolder.readFile('uk');
		if (typeof content === 'string') {
			content = content.trim();
		}
		expect(content).toBe('# Привіт світ!');
	});

	it('should return null when trying to read non-existent file', () => {
		const markdownFolder = new MarkdownFolder({
			path: fromCWD('./app/_utils/fixtures/md')
		});
		let content = markdownFolder.readFile('non-existent-locale');
		expect(content).toBeNull();
	});
});