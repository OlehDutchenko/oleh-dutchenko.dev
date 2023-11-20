import fromCWD from 'from-cwd';
import { describe, expect, it, vi } from 'vitest';
import { TranslationsFolder } from '../TranslationsFolder';

describe('TranslationsFolder', () => {
	it('should read and return content from the child file', () => {
		const translationsFolder = new TranslationsFolder({
			path: getPath(),
		});
		let content = translationsFolder.getLanguageFile('uk');
		expect(content).toEqual({ title: 'Привіт світ!' });
	});

	it('should return null when trying to read non-existent file', () => {
		const translationsFolder = new TranslationsFolder({
			path: getPath(),
		});

		muteLog();
		let content = translationsFolder.getLanguageFile('non-existent-locale');
		unmuteLog();

		expect(content).toBeNull();
	});

	it('should return null when trying to read JSON with wrong data structure', () => {
		const translationsFolder = new TranslationsFolder({
			path: getPath(),
		});

		muteLog();
		let content = translationsFolder.getLanguageFile('wrong-structure');
		unmuteLog();

		expect(content).toBeNull();
	});
});

function getPath() {
	return fromCWD(
		'./app/_locales/MultiLangFolder/__specs__/fixtures/translations'
	);
}

function muteLog() {
	vi.stubGlobal('console', {
		error: () => {},
	});
}

function unmuteLog() {
	vi.unstubAllGlobals();
}
