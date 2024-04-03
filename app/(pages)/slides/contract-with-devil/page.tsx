import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { Tenor_Sans as FontSlideBase } from 'next/font/google';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import { Introduce } from './_slides/Introduce';
import './overrides.css';
import { MyStory } from './_slides/MyStory';
import { MyTalkPromise } from './_slides/MyTalkPromise';
import { Question1 } from './_slides/Question1';
import { Title } from './_slides/Title';

const fontSlideBase = FontSlideBase({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-slide-base',
});

export default function Page(): ReactElement {
	return (
		<Root htmlClassName={fontSlideBase.variable}>
			<RevealSlides hash hashOneBasedIndex>
				<Title />
				<Question1 />
				<MyTalkPromise />
				<MyStory />
				<Introduce />
				<section
					data-background-color="#f0f1eb"
					data-transition="zoom-in"
					data-transition-speed="slow"
				>
					<h3>Slide C</h3>
					<p>Description</p>
				</section>
			</RevealSlides>
		</Root>
	);
}
