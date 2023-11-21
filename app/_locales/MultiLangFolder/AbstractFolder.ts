import { FileSource, FsWalker } from '@wezom/fs-walker';
import { join } from 'path';

export abstract class AbstractFolder {
	private readonly path: string;
	protected abstract readonly filePrefix: string;
	protected abstract readonly fileExtension: string;

	constructor(options: Options) {
		this.path = options.path;
	}

	protected getFileSource(locale: string): FileSource {
		const filename = this.filePrefix + locale + this.fileExtension;
		const source = join(this.path, filename);
		return FsWalker.defineFile(source);
	}

	abstract getLanguageFile(locale: string): any;
}

interface Options {
	path: string;
}
