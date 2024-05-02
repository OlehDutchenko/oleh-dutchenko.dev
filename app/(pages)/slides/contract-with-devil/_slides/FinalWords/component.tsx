import { ReactElement } from 'react';
import { ImageWrapper } from '../../_components/ImageWrapper';
import { Section } from '../../_components/Section';

export function FinalWords(): ReactElement {
	return (
		<>
			<Section bgColor="light">
				<table>
					<tbody>
						<tr>
							<td>
								<ImageWrapper>
									<img
										alt=""
										width={800}
										src="/static/slides-contract-with-devil/qr.png"
									/>
								</ImageWrapper>
							</td>
							<td width="68%">
								<h3>Дякую за увагу!</h3>
								<p>
									<a href="https://oleh-dutchenko.dev/">
										https://oleh-dutchenko.dev
									</a>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</Section>
		</>
	);
}
