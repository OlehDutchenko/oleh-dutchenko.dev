import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { Tenor_Sans as FontSlideBase } from 'next/font/google';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import 'reveal.js/plugin/highlight/monokai.css';
import { DepsRuleIntro } from './_slides/DepsRuleIntro';
import { Despondency } from './_slides/Despondency';
import { FindingSolution } from './_slides/FindingSolution';
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
import { SolutionForFrontend } from './_slides/SolutionForFrontend';
import { FinalWords } from './_slides/FinalWords';
import { SolutionResult } from './_slides/SolutionResult';
import { Title } from './_slides/Title';
import { Wezom2020 } from './_slides/Wezom2020';
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
				<Wezom2020 />
				<OpenSourceAndGames />
				<MyRoleInCompany />
				<WezomOutsource />
				<DepsRuleIntro />
				<MyStory />
				<GraphQL101 />
				<GraphQLStructureBefore />
				<GraphQLProblem />
				<Despondency />
				<FindingSolution />
				<SolutionForFrontend />
				<SolutionResult />
				<Question withAnswer />
				<FinalWords />
			</RevealSlides>
		</Root>
	);
}
