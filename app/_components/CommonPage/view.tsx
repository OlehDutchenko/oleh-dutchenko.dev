import { Article } from '@/_components/Article';
import { Container } from '@/_components/Container';
import React, { PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {}

export function CommonPage({ children }: Props): ReactElement {
	return (
		<main>
			<Container>
				<Article>{children}</Article>
			</Container>
		</main>
	);
}
