import { Link } from '@/_components/Link';
import MarkdownToJsx, { MarkdownToJSX } from 'markdown-to-jsx';
import { ReactElement } from 'react';
import { normalizeContent } from './utils/normalizeContent';

interface Props {
	content: string;
}

export function Markdown({ content }: Props): ReactElement {
	const children = normalizeContent(content);
	const options: MarkdownToJSX.Options = {
		overrides: {
			h1: { props: { className: 'heading-1' } },
			h2: { props: { className: 'heading-2' } },
			a: { component: Link },
		},
	};

	return <MarkdownToJsx options={options}>{children}</MarkdownToJsx>;
}
