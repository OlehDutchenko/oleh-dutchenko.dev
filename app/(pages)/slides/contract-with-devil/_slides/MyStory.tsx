import { ReactElement } from 'react';

export function MyStory(): ReactElement {
	return (
		<section
			data-background-color="black"
			data-transition="zoom-in slide-out"
			data-transition-speed="slow"
		>
			<h2>Моя історія</h2>
			<p>
				про захоплення технологією, <br />
				про зневіру в обраному шляху <br />
				та &quot;просвітлення&quot; 😎
			</p>
		</section>
	);
}
