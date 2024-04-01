import { AccentElement } from '@/_components/AccentElement';
import { CSSProperties, ReactElement } from 'react';

export function MyStory(): ReactElement {
	return (
		<section
			data-background-color="black"
			data-transition="zoom-in fade-out"
			data-transition-speed="slow"
			className="section-my-story"
		>
			<img
				width="200"
				alt=""
				src="/static/slides-contract-with-devil/waves-b.gif"
			/>
			<br />
			<AccentElement>
				<p style={{ padding: '0 4rem' }}>
					Моя історія про захоплення технологією,
					<span
						className="fragment _slide-up"
						style={{ '--mh': '50px' } as CSSProperties}
					>
						<span>про зневіру в обраному шляху</span>
					</span>
					<span
						className="fragment _slide-up"
						style={{ '--mh': '50px' } as CSSProperties}
					>
						<span>та &quot;просвітління&quot; 😎</span>
					</span>
				</p>
			</AccentElement>
		</section>
	);
}
