import { fileURLToPath } from 'url';

export function resolveCurrentFilePath(metaUrl: string): string {
	return fileURLToPath(metaUrl);
}
