import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { Tenor_Sans as FontSlideBase } from 'next/font/google';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import { Section } from './_components/Section';
import { BaldursGate3 } from './_slides/BaldursGate3';
import { Bio } from './_slides/Bio';
import { DepsRuleIntro } from './_slides/DepsRuleIntro';
import { GameAnalogy } from './_slides/GameAnalogy';
import { GameDecision } from './_slides/GameDecision';
import { GameNotTheTalkTheme } from './_slides/GameNotTheTalkTheme';
import { Introduce } from './_slides/Introduce';
import './overrides.css';
import { MyRoleInCompany } from './_slides/MyRoleInCompany';
import { MyStory } from './_slides/MyStory';
import { MyTalkPromise } from './_slides/MyTalkPromise';
import { OpenSourceAndGames } from './_slides/OpenSourceAndGames';
import { Question } from './_slides/Question';
import { Title } from './_slides/Title';
import { Wezom2020 } from './_slides/Wezom2020';
import { WezomCommonArch } from './_slides/WezomCommonArch';
import { WezomOutsource } from './_slides/WezomOutsource';

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
				<Introduce />
				<Bio />
				<Wezom2020 />
				<OpenSourceAndGames />
				<BaldursGate3 />
				<GameDecision />
				<GameNotTheTalkTheme />
				<GameAnalogy />
				<MyRoleInCompany />
				<WezomOutsource />
				<WezomCommonArch />
				<DepsRuleIntro />
				<MyStory />
				<Section bgColor="light">
					<p>Work in progress...</p>
				</Section>
			</RevealSlides>
		</Root>
	);
}
