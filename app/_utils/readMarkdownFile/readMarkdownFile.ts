import { resolveCurrentFolder } from '@/_utils/resolveFS';
import { FsWalker } from '@wezom/fs-walker';
import { join } from 'path';

/** @throws {Error} */
export function readMarkdownFile(metaUrl: string, locale: string): string {
	const folder = resolveCurrentFolder(metaUrl);
	const filename = makeFilename(locale);
	const fullPath = join(folder, filename);
	const file = FsWalker.defineFile(fullPath);
	return file.readAsText();
}

function makeFilename(locale: string): string {
	return `content.${locale}.md`;
}
