import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';

export function Header(): ReactElement {
	return (
		<header className="cv-box">
			<div className="cv-header">
				<div className="cv-header__left">
					<div>Frontend developer</div>
					<h1 className="cv-heading">Oleh Dutchenko</h1>
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
				I have 10 years of experience in outsourced projects. Have been
				working on different domains, <br />
				such as Real Estate, Energy carriers, News portal and VoIP
				telephony, by making the E-Commerce, CMS, HRM and CRM systems.
				Passionate about developing with GraphQL, TypeScript and React.
			</p>
		</header>
	);
}
