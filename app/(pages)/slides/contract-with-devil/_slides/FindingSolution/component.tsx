import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { ImageWrapper } from '../../_components/ImageWrapper';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';

export function FindingSolution(): ReactElement {
	return (
		<>
			<Section bgColor="light">
				<p>
					Пошук рішення <br /> в статтях, книжках, нових, старих...
				</p>
			</Section>
			<Section bgColor="light">
				<p>Знову повернувся до</p>
				<table>
					<tbody>
						<tr>
							<td className="fragment">
								<ImageWrapper>
									<img
										width={800}
										src="/static/slides-contract-with-devil/dddq.png"
										alt=""
									/>
								</ImageWrapper>
							</td>
							<td className="fragment">
								<ImageWrapper>
									<img
										width={730}
										src="/static/slides-contract-with-devil/ca.webp"
										alt=""
									/>
								</ImageWrapper>
							</td>
						</tr>
					</tbody>
				</table>
			</Section>
			<Section bgColor="light" className="flex-section">
				<p>
					Раніше, я їх читав<Fragment>-проглядав</Fragment>
				</p>
				<RollingFragment component="div" maxHeight={100}>
					Але тепер я перечитував уважно. <br /> Відчувши на собі, я
					розумів про що ці книжки.
				</RollingFragment>
			</Section>
			<Section bgColor="light" className="flex-section">
				<p>
					У всіх розділах <em>&quot;Як не треба робити&quot;</em>{' '}
					<br /> <Fragment>я впізнавав наш проєкт</Fragment>
				</p>
			</Section>

			<Section bgColor="light" className="flex-section">
				<p>
					DDD вказує на загальні рішення
					<br />
					<RollingFragment className="like-h3">
						Customer-Supplier
					</RollingFragment>
				</p>
				<RollingFragment component="p" maxHeight={100}>
					Ми навчились правильно впроваджувати зміни в АПІ <br />
					<code>@deprecated</code>
				</RollingFragment>
			</Section>
		</>
	);
}
