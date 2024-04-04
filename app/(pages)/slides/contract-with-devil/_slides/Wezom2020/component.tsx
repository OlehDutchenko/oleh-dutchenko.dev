import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Wezom2020(): ReactElement {
	return (
		<Section bgColor="dark">
			<table>
				<tbody>
					<tr>
						<td width="68%">
							<p>
								в 2020 зробив доповідь для керівництва та
								топ-менеджменту де “продав” GraphQL, як
								технологію на яку потрібно зробити ставку в
								майбутньому!
							</p>
						</td>
						<td>
							<img
								width={800}
								alt=""
								style={{ background: 'white' }}
								src="/static/slides-contract-with-devil/graphql.png"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
