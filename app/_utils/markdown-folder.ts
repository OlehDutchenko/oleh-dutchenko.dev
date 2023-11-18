import { FsWalker } from '@wezom/fs-walker';
import { join } from 'path';

export class MarkdownFolder {
	private readonly path: string;
	private readonly filePrefix = 'content.';
	private readonly fileExtension = '.md';

	constructor(options: Options) {
		this.path = options.path;
	}

	readFile(locale: string): string | null {
		const source = this.getFileSource(locale);
		const file = FsWalker.defineFile(source);
		try {
			return file.readAsText();
		} catch (e) {
			console.error(e);
			return null;
		}
	}

	private getFileSource(locale: string): string {
		return join(this.path, this.filePrefix + locale + this.fileExtension);
	}
}

interface Options {
	path: string;
}