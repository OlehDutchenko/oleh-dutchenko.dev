import { RevealSlides } from '@slides/_components/RevealSlides';
import { Intro } from './_slides/intro';
import { Preface } from './_slides/preface';

export default function Page() {
	return (
		<>
			<RevealSlides hash hashOneBasedIndex>
				<Preface />
				<Intro />
			</RevealSlides>
			<img
				src="/static/slides-contract-with-devil/js_rgb.png"
				alt=""
				aria-hidden="true"
				className="fwdays-logo"
			/>
			<div className="fwdays-frame"></div>
		</>
	);
}
