import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { ImageWrapper } from '../../_components/ImageWrapper';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';
import { SlashBlock } from '../../_components/SlashBlock';
import styles from './styles.module.css';

export function OpenSourceAndGames(): ReactElement {
	return (
		<>
			<Section bgColor="darker">
				<h3>Окрім основної діяльності</h3>
				<SlashBlock left={<Left />} right={<Right />} />
			</Section>
			<Section bgColor="darker">
				<table>
					<tbody>
						<tr>
							<td>
								<ImageWrapper>
									<img
										width={800}
										src="/static/slides-contract-with-devil/Baldur's_Gate_III_Logo.png"
										alt=""
									/>
								</ImageWrapper>
							</td>
							<td width="50%">
								<p>
									Ідея та назва доповіді зʼявились коли я грав
									у “Baldur’s Gate III”.
								</p>
								<RollingFragment maxHeight={200}>
									<p>
										Це гра з не лінійним сюжетом, в якій
										гравець постійно приймає різні рішення.
									</p>
								</RollingFragment>
							</td>
						</tr>
					</tbody>
				</table>
			</Section>
			<Section bgColor="darker">
				<AccentElement>
					<blockquote style={{ background: 'none' }}>
						<p>
							Обраний варіант, котрий, на перший погляд, здається
							не важливим - може мати колосальний вплив на
							фінальну розвʼязку гри
						</p>
					</blockquote>
				</AccentElement>
			</Section>
			<Section bgColor="accent" className={styles.sectionAccent}>
				<p>
					А ще у грі багато різних <br />
					демонів, дияволів, бісинів та купа всього цікавого)
				</p>
				<RollingFragment component="div">
					Проте, доповідь, все ж таки, не про гру…
				</RollingFragment>
			</Section>
			<Section bgColor="darker" className={styles.sectionAnalogy}>
				<blockquote style={{ background: 'none' }}>
					<p>
						Якщо провести аналогію між грою та процесом розробки, ми
						зможемо побачити подібний звʼязок:
					</p>
					<Fragment>
						<AccentElement>
							<p>
								Рішення які приймаються розробниками кожного
								дня, <br /> та навіть тривіальні дії, можуть
								кардинально вплинути на подальшу долю кодової
								бази проєкту!
							</p>
						</AccentElement>
					</Fragment>
				</blockquote>
			</Section>
		</>
	);
}

function Left(): ReactElement {
	return (
		<>
			Займаюсь опенсоурсними <br />
			пет-проєктами: <br />
			<small>
				<br />
				<code>sort-css-media-queries</code>
				{' | '}
				<code>node-w3c-validator</code>
			</small>
		</>
	);
}

function Right(): ReactElement {
	return (
		<>
			та <br />
			граю <br />у відеоігри
		</>
	);
}
