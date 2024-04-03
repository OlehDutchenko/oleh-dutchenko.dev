import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Bio(): ReactElement {
	return (
		<Section bgColor="darker">
			<table>
				<tbody>
					<tr>
						<td>
							<img
								width={800}
								alt=""
								src="https://avatars.githubusercontent.com/u/16334642?s=400&u=7a3a6c359d36022ce6eafc36617eb43c12fc4274&v=4"
							/>
						</td>
						<td width="68%">
							<h3>Олег Дутченко</h3>
							<p>
								в минулому, моушн-дизайнер <br />
								який досить давно свічнувся в розробку <br />
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
