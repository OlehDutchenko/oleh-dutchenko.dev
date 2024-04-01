import { ReactElement } from 'react';

export function Title(): ReactElement {
	return (
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
	);
}
