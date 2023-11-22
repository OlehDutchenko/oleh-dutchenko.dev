import { LocaleParam, STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import type { PageProps } from '@/types';
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
			<div className="control">
				<div>
					<select>
						<option value="xx">Lorem ipsum</option>
						<option value="yy">Lorem ipsum</option>
					</select>
				</div>
			</div>

			<br />
			<br />

			<div className="control">
				<div>
					<input type="text" />
				</div>
			</div>
			<p>Lorem ipsum dolor sit amet.</p>
		</main>
	);
}
