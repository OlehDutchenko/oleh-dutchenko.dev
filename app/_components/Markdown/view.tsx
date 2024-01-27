import React from 'react';
import MarkdownToJsx from 'markdown-to-jsx';

interface Props {
	content: string;
}

export const Markdown: React.FC<Props> = ({ content }) => {
	content = normalize(content);
	return <MarkdownToJsx>{content}</MarkdownToJsx>;
};

function normalize(content: string): string {
	const trimmed = content.trimStart();
	const spaceAtStartLength = content.length - trimmed.length;
	const spaceAtStart = content.slice(0, spaceAtStartLength);
	const spacesBeforeFirstChar = spaceAtStart.split('\n').pop();
	if (spaceAtStartLength > 0) {
		content = content.replaceAll('\n' + spacesBeforeFirstChar, '\n');
	}
	return content.trim();
}
