import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function BaldursGate3(): ReactElement {
	return (
		<Section bgColor="darker">
			<table>
				<tbody>
					<tr>
						<td>
							<img
								width={800}
								src="https://upload.wikimedia.org/wikipedia/ru/d/dc/Baldur%27s_Gate_III_Logo.png"
								alt=""
							/>
						</td>
						<td width="50%">
							<p>
								Ідея та назва доповіді зʼявились коли я грав у
								“Baldur’s Gate III”.
							</p>
							<RollingFragment maxHeight={200}>
								<p>
									Це гра з не лінійним сюжетом, в якій гравець
									постійно приймає різні рішення
								</p>
							</RollingFragment>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
