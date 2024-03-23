export function normalizeContent(content: string): string {
	const trimmed = content.trimStart();
	const spaceAtStartLength = content.length - trimmed.length;
	const spaceAtStart = content.slice(0, spaceAtStartLength);
	const spacesBeforeFirstChar = spaceAtStart.split('\n').pop();
	if (spaceAtStartLength > 0) {
		content = content.replaceAll('\n' + spacesBeforeFirstChar, '\n');
	}
	return content.trim();
}
