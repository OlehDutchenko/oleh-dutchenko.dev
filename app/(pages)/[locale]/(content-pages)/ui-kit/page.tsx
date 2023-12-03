import { ExternalLink } from '@/_components/ExternalLink';
import { LocaleParam, STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import type { PageProps } from '@/_types/page-props';
import React from 'react';

export function generateStaticParams(): LocaleParam[] {
	return STATIC_LOCALE_PARAMS;
}

export default function Homepage(props: PageProps): React.ReactElement {
	return (
		<main style={{ maxWidth: 680, margin: '0 auto' }}>
			<header>
				<h1>Привіт світ!</h1>
			</header>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
				<ExternalLink href="https://gist.github.com/OlehDutchenko/c561d59c1ec9dbcc9414f6e4274c706d">
					Amet autem cumque
				</ExternalLink>{' '}
				eligendi hic nihil repudiandae{' '}
				<ExternalLink href="https://nextjs.org/learn">
					Amet autem cumque
				</ExternalLink>{' '}
				sed vero, voluptate? Consequuntur doloribus eaque eum harum
				impedit libero modi officia quae quidem repellendus!{' '}
				<ExternalLink href="https://www.linkedin.com/feed/">
					Amet autem cumque
				</ExternalLink>{' '}
				eligendi hic nihil repudiandae sed vero, voluptate? Consequuntur
				doloribus eaque eum harum impedit libero modi officia quae
				quidem repellendus.{' '}
				<ExternalLink href="https://twitter.com/home">
					Amet autem cumque
				</ExternalLink>{' '}
				eligendi hic nihil repudiandae sed vero, voluptate?
			</p>
		</main>
	);
}
