import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';

export function Header(): ReactElement {
	return (
		<header className="cv-box">
			<br />
			<div className="cv-header">
				<div className="cv-header__left">
					<div>Senior Frontend Developer</div>
					<h1>Oleh Dutchenko</h1>
				</div>
				<div className="cv-header__right">
					<p style={{ lineHeight: 1.6 }}>
						<a href="mailto:dutchenko.o.cv@gmail.com">
							dutchenko.o.cv@gmail.com
						</a>{' '}
						<br />
						<ExternalLink href="https://github.com/OlehDutchenko">
							GitHub
						</ExternalLink>{' '}
						<ExternalLink href="https://www.linkedin.com/in/oleh-dutchenko/">
							LinkedIn
						</ExternalLink>{' '}
						<ExternalLink href="https://t.me/b93Rq397ePaweZK">
							Telegram
						</ExternalLink>
						<br />
						Vinnytsya, Ukraine (Remote)
					</p>
				</div>
			</div>
			<p>
				Frontend developer with 10 years of experience in developing and
				managing large-scale web applications. <br /> Specialized in
				React, Typescript and GraphQL. <br />
				Passionated about TDD methodology and DDD approach.
			</p>
			<br />
		</header>
	);
}
