import { PageProps } from '@/_types/page-props';
import { generateStaticParams } from '@/_utils/generateStaticParams';
import React from 'react';

export { generateStaticParams };

export default function InnerPage(props: PageProps): React.ReactElement {
	return (
		<main>
			<header>
				<h1>Привіт світ!</h1>
			</header>
			<p>Lorem ipsum dolor sit amet.</p>
		</main>
	);
}
