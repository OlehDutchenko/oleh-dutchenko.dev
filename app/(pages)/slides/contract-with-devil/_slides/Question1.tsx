import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { RollingFragment } from '../_components/RollingFragment';

export function Question1(): ReactElement {
	return (
		<section
			data-background-color="black"
			data-transition="fade-in slide-out"
			data-transition-speed="slow"
			className="section-question"
		>
			<p className="font-weight-light">
				<small>Питання до аудиторії:</small>
			</p>
			<div className="fragment _no-will-change">
				<AccentElement>
					<p
						className="question"
						style={{ lineHeight: 1.5, padding: '0 7rem' }}
					>
						<span>
							Чи може{' '}
							<span style={{ borderBottom: '1px solid' }}>
								технологія
							</span>{' '}
							призвести до ситуації,{' '}
						</span>
						<RollingFragment maxHeight={100}>
							коли розробка проекту <br />
							стає настільки складною та нестерпною,
						</RollingFragment>
						<RollingFragment maxHeight={100}>
							що подальша робота здається <br />
							абсолютно неможливою?
						</RollingFragment>
					</p>
				</AccentElement>
			</div>
		</section>
	);
}
