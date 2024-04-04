import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Bio(): ReactElement {
	return (
		<>
			<Section bgColor="darker">
				<table>
					<tbody>
						<tr>
							<td>
								<img
									width={800}
									alt=""
									src="/static/slides-contract-with-devil/my-avatar.png"
								/>
							</td>
							<td width="68%">
								<h3>Олег Дутченко</h3>
								<p>
									в минулому, моушн-дизайнер <br />
									який досить давно свічнувся в розробку.
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</Section>
			<Section bgColor="darker">
				<table>
					<tbody>
						<tr>
							<td>
								<img
									width={800}
									alt=""
									src="/static/slides-contract-with-devil/wezom-logo-white.png"
								/>
							</td>
							<td width="68%">
								<p>
									Для мене все почалось 10 років тому, в IT
									компанії Wezom.
								</p>
								<p>
									Я досі, з задоволенням, працюю в компанії.
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</Section>
		</>
	);
}
