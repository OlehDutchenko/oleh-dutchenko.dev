import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { Tenor_Sans as FontSlideBase } from 'next/font/google';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import { Section } from './_components/Section';
import { Bio } from './_slides/Bio';
import { Bio2 } from './_slides/Bio2';
import { Introduce } from './_slides/Introduce';
import './overrides.css';
import { OpenSourceAndGames } from './_slides/OpenSourceAndGames';
import { BaldursGate3 } from './_slides/BaldursGate3';
import { MyStory } from './_slides/MyStory';
import { MyTalkPromise } from './_slides/MyTalkPromise';
import { Question } from './_slides/Question';
import { Title } from './_slides/Title';
import { GameAnalogy } from './_slides/GameAnalogy';
import { GameDecision } from './_slides/GameDecision';
import { Wezom2020 } from './_slides/Wezom2020';
import { MyRoleInCompany } from './_slides/MyRoleInCompany';

const fontSlideBase = FontSlideBase({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-slide-base',
});

export default function Page(): ReactElement {
	return (
		<Root htmlClassName={fontSlideBase.variable}>
			<RevealSlides hash hashOneBasedIndex>
				<Title />
				<Question />
				<MyTalkPromise />
				<MyStory />
				<Introduce />
				<Bio />
				<Bio2 />
				<Wezom2020 />
				<OpenSourceAndGames />
				<BaldursGate3 />
				<GameDecision />
				<GameAnalogy />
				<MyRoleInCompany />

				<Section bgColor="light">
					<table>
						<tbody>
							<tr>
								<td width="68%">
									<p>
										в 2020 зробив доповідь для керівництва
										та топ-менеджменту де “продав” GraphQL,
										як технологію на яку потрібно зробити
										ставку в майбутньому!
									</p>
								</td>
								<td>
									<img
										width={800}
										alt=""
										style={{ background: 'white' }}
										src="https://graphqleditor.com/images/graphql.png"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</Section>
			</RevealSlides>
		</Root>
	);
}
