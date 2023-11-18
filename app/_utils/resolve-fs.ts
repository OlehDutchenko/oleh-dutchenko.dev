import { dirname } from 'path';
import { fileURLToPath } from 'url';

export function resolveCurrentFilePath(metaUrl: string) {
	return fileURLToPath(metaUrl);
}

export function resolveCurrentFolder(metaUrl: string) {
	return dirname(resolveCurrentFilePath(metaUrl));
}