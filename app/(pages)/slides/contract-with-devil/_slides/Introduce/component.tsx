import { ReactElement } from 'react';
import { ImageWrapper } from '../../_components/ImageWrapper';
import { Section } from '../../_components/Section';

export function Introduce(): ReactElement {
	return (
		<>
			<Section bgColor="dark">
				<p>
					<small>для початку</small>
					<br />
					дозвольте представитись
				</p>
			</Section>
			<>
				<Section bgColor="darker">
					<table>
						<tbody>
							<tr>
								<td>
									<ImageWrapper>
										<img
											width={800}
											alt=""
											src="/static/slides-contract-with-devil/my-avatar.png"
										/>
									</ImageWrapper>
								</td>
								<td width="68%">
									<h3>Олег Дутченко</h3>
									<p>
										в минулому - моушн-дизайнер, <br />
										який досить давно свічнувся в розробку
										як верстальник
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
									<ImageWrapper>
										<img
											width={800}
											alt=""
											src="/static/slides-contract-with-devil/wezom-logo-white.png"
										/>
									</ImageWrapper>
								</td>
								<td width="68%">
									<p>
										Для мене все почалось 10 років тому, в
										IT компанії Wezom.
									</p>
									<p>
										Я досі, з задоволенням, працюю в
										компанії.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</Section>
			</>
		</>
	);
}
