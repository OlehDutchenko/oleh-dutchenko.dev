import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Bio2(): ReactElement {
	return (
		<Section bgColor="darker">
			<table>
				<tbody>
					<tr>
						<td>
							<img
								width={800}
								alt=""
								src="https://avatars.githubusercontent.com/u/74930680?s=400&u=bbdbbc36c0b267cd0de8f92bb2845b4dd275fd95&v=4"
							/>
						</td>
						<td width="68%">
							<p>
								Для мене все почалось 10 років тому, в IT
								компанії Wezom
							</p>
							<p>Я досі, з задоволенням працюю в компанії.</p>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
