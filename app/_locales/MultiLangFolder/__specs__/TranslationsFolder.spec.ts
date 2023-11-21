import fromCWD from 'from-cwd';
import { describe, expect, it } from 'vitest';
import { TranslationsFolder } from '../TranslationsFolder';

describe('TranslationsFolder', () => {
	it('should read and return content from the child file', () => {
		const translationsFolder = new TranslationsFolder({
			path: getPath(),
		});
		let content = translationsFolder.getLanguageFile('uk');
		expect(content).toEqual({ title: 'Привіт світ!' });
	});

	it('should throw an error when trying to read non-existent file', () => {
		const translationsFolder = new TranslationsFolder({
			path: getPath(),
		});

		const testFn = () => {
			translationsFolder.getLanguageFile('non-existent-locale');
		};

		expect(testFn).toThrow();
	});

	it('should throw an error when trying to read JSON with wrong data structure', () => {
		const translationsFolder = new TranslationsFolder({
			path: getPath(),
		});

		const testFn = () => {
			translationsFolder.getLanguageFile('wrong-structure');
		};

		expect(testFn).toThrow();
	});
});

function getPath() {
	return fromCWD(
		'./app/_locales/MultiLangFolder/__specs__/fixtures/translations'
	);
}
