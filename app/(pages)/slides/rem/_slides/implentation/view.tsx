import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function Implementation() {
	return (
		<>
			<RemSlide transition="zoom-in slide-out" bgColor="dark">
				<div className="op-50">
					<small>
						<small>Реалізація</small>
					</small>
				</div>
				<h3>
					Як перейти на <code>rem</code>?
				</h3>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="darker">
				<p>Закласти основу для відносних значень</p>
				<Fragment component="pre">
					<code
						data-trim
						data-noescape
						className="language-css"
						data-line-numbers="1,3|1-3"
					>{`:root {\n\tfont-size: 100%;\n}\n`}</code>
				</Fragment>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="darker">
				<p>Визначити типографію кожного елемента</p>
				<Fragment component="pre">
					<code
						data-noescape
						className="language-css"
						data-line-numbers="1,5|1-2|1-3|1-5"
					>{`.typography-h1 {\n\tfont-size: 2.5rem;\n\tline-height: 150%;\n\tmargin: 0.25em 0;\n}`}</code>
				</Fragment>
			</RemSlide>
			<RemSlide transition="slide-in zoom-out" bgColor="dark">
				<p>Продовжуйте далі :)</p>
				<p className="op-60">
					<small>Періодично перевіряйте зміну масштабу тексту</small>
				</p>
			</RemSlide>
		</>
	);
}
