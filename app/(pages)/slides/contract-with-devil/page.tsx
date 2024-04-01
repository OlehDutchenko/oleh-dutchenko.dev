import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import { Title } from './_slides/Title';
import { Question1 } from './_slides/Question1';
import { MyStory } from './_slides/MyStory';
import { Introduce } from './_slides/Introduce';
import './overrides.css';

export default function Page(): ReactElement {
	return (
		<Root>
			<RevealSlides>
				<Title />
				<Question1 />
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
