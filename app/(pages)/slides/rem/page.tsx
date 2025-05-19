import { RevealSlides } from '@slides/_components/RevealSlides';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export default function Page() {
	return (
		<>
			<RevealSlides>
				<RemSlide>
					<h2 className="font-title">
						rem — одна одиниця, щоб правити всім
					</h2>
					<p>
						<em>ChatGPT</em>
					</p>
				</RemSlide>

				<RemSlide>
					<h2>What is a contract?</h2>
					<p>
						A contract is an agreement between two or more parties.
					</p>
					<p>It can be written or oral.</p>
				</RemSlide>
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
