import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import './overrides.css';

export default function Page(): ReactElement {
	return (
		<Root>
			<RevealSlides>
				<section
					data-background-color="black"
					data-background-image="/static/slides-contract-with-devil/fire-wallpaper.gif"
					data-transition="fade"
					data-transition-speed="slow"
				>
					<div className="hero-block">
						<p className="hero-subtitle fragment">
							Підводні камені генерованого <br />
							TypeScript коду зі схеми GraphQL
						</p>
						<h1 className="hero-title">«Контракт з Дияволом»</h1>
					</div>
				</section>
				<section
					data-background-color="maroon"
					data-transition="zoom-in convex-out"
					data-transition-speed="slow"
				>
					<h2>Slide B</h2>
					<p>Description</p>
				</section>
				<section
					data-background-color="#f0f1eb"
					data-transition="convex-in"
					data-transition-speed="slow"
				>
					<h3>Slide C</h3>
					<p>Description</p>
				</section>
			</RevealSlides>
		</Root>
	);
}
