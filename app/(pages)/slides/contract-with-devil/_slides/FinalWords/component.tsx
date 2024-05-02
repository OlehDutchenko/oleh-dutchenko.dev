import { ReactElement } from 'react';
import { ImageWrapper } from '../../_components/ImageWrapper';
import { Section } from '../../_components/Section';

export function FinalWords(): ReactElement {
	return (
		<>
			<Section bgColor="darker">
				<table>
					<tbody>
						<tr>
							<td>
								<ImageWrapper>
									<img
										alt=""
										width={800}
										src="/static/slides-contract-with-devil/my-avatar.png"
									/>
								</ImageWrapper>
							</td>
							<td width="68%">
								<h3>Дякую за увагу!</h3>
								<p>
									<a
										target="_blank"
										rel="noreferrer noopener"
										href="https://www.linkedin.com/in/oleh-dutchenko/"
									>
										in/oleh-dutchenko
									</a>
								</p>
								<p>
									<a
										target="_blank"
										rel="noreferrer noopener"
										href="https://github.com/OlehDutchenko"
									>
										github/OlehDutchenko
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
