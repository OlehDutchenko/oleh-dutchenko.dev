import { ReactElement } from 'react';

interface Props {
	mainPage?: boolean;
}

export function PageCaption({ mainPage }: Props): ReactElement {
	return (
		<div className="cv-page-caption">
			<div>
				{mainPage ? (
					'Frontend Tech Lead'
				) : (
					<>
						<strong>Oleh Dutchenko</strong>
						<br />
						<span className="cv-caption">Frontend Tech Lead</span>
					</>
				)}
			</div>
			<div>
				<a href="mailto:dutchenko.o.cv@gmail.com">
					dutchenko.o.cv@gmail.com
				</a>
			</div>
		</div>
	);
}
