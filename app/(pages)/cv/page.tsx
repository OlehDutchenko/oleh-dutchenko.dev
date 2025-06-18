import './page.css';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';

export default function CVPage() {
	return (
		<main>
			<h1>Oleh Dutchenko</h1>
			<section className="contacts">
				<div>
					<p>
						Email:{' '}
						<ExternalLink href="mailto:dutchenko.o.cv@gmail.com">
							dutchenko.o.cv@gmail.com
						</ExternalLink>
					</p>
					<p>
						LinkedIn:{' '}
						<ExternalLink href="https://www.linkedin.com/in/oleh-dutchenko">
							in/oleh-dutchenko
						</ExternalLink>
					</p>
					<p>
						Telegram:{' '}
						<ExternalLink href="https://t.me/b93Rq397ePaweZK">
							Oleh Dutchenko
						</ExternalLink>
					</p>
				</div>
				<div>
					<p>
						Phone:{' '}
						<ExternalLink href="tel:+380668231442">
							+380 66 823 1442
						</ExternalLink>
					</p>
					<p>Vinnytsia, Ukraine (Remote)</p>
				</div>
			</section>
			<hr />
			<h2>
				Frontend Senior Engineer{' '}
				<span style={{ fontWeight: 400, margin: '0 0.5em' }}>/</span>{' '}
				Tech Lead
			</h2>
			<p>
				Professional specialist with 11 years of experience in
				developing and managing large-scale web applications. I have 3
				years of experience managing front-end teams as a Tech Lead and
				implementing development practices: TDD, Design Review and Code
				Review. Proficient in:
			</p>
		</main>
	);
}
