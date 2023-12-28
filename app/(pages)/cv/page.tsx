import { Root } from '@/_components/Root';
import React from 'react';
import './page.css';
import { Employment } from './_widgets/Employment';
import { Header } from './_widgets/Header';
import { Profile } from './_widgets/Profile';

export default function CVPage(): React.ReactElement {
	return (
		<Root locale="en">
			<main>
				<Header />
				<Profile />
				<Employment />
			</main>
		</Root>
	);
}
