import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function MyRoleInCompany(): ReactElement {
	return (
		<Section bgColor="dark">
			<AccentElement>
				<blockquote style={{ background: 'none' }}>
					<p>
						На даний момент, в компанії, я займаю роль фронтенд{' '}
						<br />
						тех-ліда. Моїм обовʼязком є розуміння та прогнозування
						можливих наслідків роботи з технологіями.
					</p>
				</blockquote>
			</AccentElement>
		</Section>
	);
}
