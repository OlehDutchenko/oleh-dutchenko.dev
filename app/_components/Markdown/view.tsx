import { Link } from '@/_components/Link';
import MarkdownToJsx, { MarkdownToJSX } from 'markdown-to-jsx';
import React from 'react';

interface Props {
	content: string;
	locale?: string;
}

export const Markdown: React.FC<Props> = ({ content, locale }) => {
	const children = normalize(content);

	const options: MarkdownToJSX.Options = {
		overrides: {
			a: {
				component: Link,
				props: {
					locale,
				},
			},
		},
	};

	return <MarkdownToJsx options={options}>{children}</MarkdownToJsx>;
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
