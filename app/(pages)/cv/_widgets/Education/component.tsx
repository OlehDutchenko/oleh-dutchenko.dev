import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Education(): ReactElement {
	return (
		<Section title="Education">
			<table className="cv-table cv-table--double">
				<tbody>
					<tr>
						<td>
							Kherson National Technical University, Graphic and
							Motion Designer, <br />
							Specialist degree
						</td>
						<td>
							<div className="cv-block-subtitle">2005 - 2010</div>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
