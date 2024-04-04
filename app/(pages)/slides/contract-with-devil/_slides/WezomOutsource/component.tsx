import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function WezomOutsource(): ReactElement {
	return (
		<Section bgColor="light">
			<table>
				<tbody>
					<tr>
						<td width="68%">
							<p>
								Варто зазначити, що більшість проектів у
								компанії це аутсорс.
							</p>
							<p> Різних розмірів та предметних областей.</p>
						</td>
						<td>
							<img
								width={800}
								alt=""
								src="/static/slides-contract-with-devil/wezom-logo-white.png"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
