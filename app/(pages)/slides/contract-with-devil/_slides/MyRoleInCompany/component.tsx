import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function MyRoleInCompany(): ReactElement {
	return (
		<Section bgColor="dark">
			<AccentElement>
				<blockquote style={{ background: 'none' }}>
					<p>
						На даний момент, в компанії я займаю роль фронтенд
						тех-ліда. Моїм обовʼязком, якраз, і є розуміння та
						прогнозування можливих наслідків, щодо прийнятих рішень
						по технологіям і того як з цими технологіями працювати.
					</p>
				</blockquote>
			</AccentElement>
		</Section>
	);
}
