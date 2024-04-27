import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { Tenor_Sans as FontSlideBase } from 'next/font/google';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import 'reveal.js/plugin/highlight/monokai.css';
import { Section } from './_components/Section';
import { BaldursGate3 } from './_slides/BaldursGate3';
import { Bio } from './_slides/Bio';
import { DepsRuleIntro } from './_slides/DepsRuleIntro';
import { GameAnalogy } from './_slides/GameAnalogy';
import { GameDecision } from './_slides/GameDecision';
import { GameNotTheTalkTheme } from './_slides/GameNotTheTalkTheme';
import { GraphQL101 } from './_slides/GraphQL101';
import { GraphQLProblem } from './_slides/GraphQLProblem';
import { GraphQLStructureBefore } from './_slides/GraphQLStructureBefore';
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
				{/* ---== INTRO ==--- */}
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

				{/* ---== MAIN ==--- */}
				<GraphQL101 />
				<GraphQLStructureBefore />
				<GraphQLProblem />

				<Section bgColor="light">
					<p>Work in progress...</p>
				</Section>

				{/* ---== CONCLUSION ==--- */}
			</RevealSlides>
		</Root>
	);
}
