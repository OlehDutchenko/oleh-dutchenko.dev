import { RevealSlides } from '@slides/_components/RevealSlides';
import { Intro } from './_slides/intro';
import { Part1Title } from './_slides/part-1-title';

export default function Page() {
	return (
		<>
			<RevealSlides hash hashOneBasedIndex>
				<Intro />
				<Part1Title />
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
