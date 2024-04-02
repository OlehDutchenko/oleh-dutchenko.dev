import { AccentElement } from '@/_components/AccentElement';
import { CSSProperties, ReactElement } from 'react';

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
					<blockquote
						style={{
							background: '#0003',
							backdropFilter: 'blur(14px)',
						}}
					>
						<p
							className="question"
							style={{
								lineHeight: 1.5,
								padding: '0 7rem',
							}}
						>
							<span>
								Чи може{' '}
								<span style={{ borderBottom: '1px solid' }}>
									технологія
								</span>{' '}
								призвести до ситуації,{' '}
							</span>
							<span
								className="fragment _slide-up"
								style={{ '--mh': '100px' } as CSSProperties}
							>
								<span>
									коли розробка проекту <br />
									стає настільки складною та нестерпною,
								</span>
							</span>
							<span
								className="fragment _slide-up"
								style={{ '--mh': '100px' } as CSSProperties}
							>
								<span>
									що подальша робота здається <br />
									абсолютно неможливою?
								</span>
							</span>
						</p>
					</blockquote>
				</AccentElement>
			</div>
		</section>
	);
}
