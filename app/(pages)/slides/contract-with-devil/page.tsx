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
					data-background-image="/static/slides-contract-with-devil/fire-wallpaper.gif"
					data-transition="zoom-out"
					data-transition-speed="slow"
				>
					<div className="hero-block">
						<h1 className="hero-title">«Контракт з Дияволом»</h1>
						<p className="hero-subtitle">
							Підводні камені генерованого <br />
							TypeScript коду зі схеми GraphQL
						</p>
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
