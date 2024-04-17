import { ReactElement } from 'react';
import { ImageWrapper } from '../../_components/ImageWrapper';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';

export function BaldursGate3(): ReactElement {
	return (
		<Section bgColor="darker">
			<table>
				<tbody>
					<tr>
						<td>
							<ImageWrapper>
								<img
									width={800}
									src="https://upload.wikimedia.org/wikipedia/ru/d/dc/Baldur%27s_Gate_III_Logo.png"
									alt=""
								/>
							</ImageWrapper>
						</td>
						<td width="50%">
							<p>
								Ідея та назва доповіді зʼявились коли я грав у
								“Baldur’s Gate III”.
							</p>
							<RollingFragment maxHeight={200}>
								<p>
									Це гра з не лінійним сюжетом, в якій гравець
									постійно приймає різні рішення.
								</p>
							</RollingFragment>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
