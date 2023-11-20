import { AbstractFolder } from './AbstractFolder';

export class MDContentFolder extends AbstractFolder {
	protected readonly filePrefix = 'content.';
	protected readonly fileExtension = '.md';

	getLanguageFile(locale: string): string | null {
		const file = this.getFileSource(locale);
		try {
			return file.readAsText();
		} catch (e) {
			console.error(e);
			return null;
		}
	}
}
