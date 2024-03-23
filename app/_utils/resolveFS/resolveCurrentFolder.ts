import { dirname } from 'path';
import { resolveCurrentFilePath } from './resolveCurrentFilePath';

export function resolveCurrentFolder(metaUrl: string): string {
	return dirname(resolveCurrentFilePath(metaUrl));
}
