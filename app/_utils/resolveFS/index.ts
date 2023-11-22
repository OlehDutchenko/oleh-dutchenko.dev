import { dirname } from 'path';
import { fileURLToPath } from 'url';

export function resolveCurrentFilePath(metaUrl: string): string {
	return fileURLToPath(metaUrl);
}

export function resolveCurrentFolder(metaUrl: string): string {
	return dirname(resolveCurrentFilePath(metaUrl));
}
