import { RevealSlides } from '@slides/_components/RevealSlides';
import { Bio } from './_slides/bio';
import { FilterExample } from './_slides/filter-example';
import { Intro } from './_slides/intro';
import { Part1Title } from './_slides/part-1-title';
import { Part2Title } from './_slides/part-2-title';
import { PxRemCompare } from './_slides/px-rem-compare';
import { WCAG } from './_slides/wcag';

export default function Page() {
	return (
		<>
			<RevealSlides hash hashOneBasedIndex>
				<Intro />
				<Part1Title />
				<Bio />
				<WCAG />
				<Part2Title />
				<PxRemCompare />
				<FilterExample />
			</RevealSlides>
			<img
				src="/static/slides-contract-with-devil/js_rgb.png"
				alt=""
				aria-hidden="true"
				className="fwdays-logo"
				width="100"
				height="98"
			/>
			<div className="fwdays-frame"></div>
		</>
	);
}
