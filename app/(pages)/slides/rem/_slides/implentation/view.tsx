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
				<p>Закладіть основу для відносних значень</p>
				<Fragment component="pre">
					<code
						data-trim
						data-noescape
						className="language-css"
						data-line-numbers="1,3|1-3"
					>{`:root {
	font-size: 100%;
}`}</code>
				</Fragment>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="darker">
				<p>Визначіть типографію кожного елемента</p>
				<Fragment component="pre">
					<code
						data-noescape
						className="language-css"
						data-line-numbers="1,6|1-2|1-3|1-4|1-6"
					>{`.typography-h1 {
	font-size: 2.5rem;
	line-height: 150%;
	margin: 0.25em 0;
	/* можна rem замість % та em */
}`}</code>
				</Fragment>
			</RemSlide>

			<RemSlide transition="zoom-in slide-out" bgColor="darker">
				<p>
					<small>
						Якщо потрібні кастомні <br /> елементи керування
						розміром тексту
					</small>
				</p>
				<Fragment component="pre">
					<code
						data-noescape
						className="language-css"
						data-line-numbers
					>{`:root {
	font-size: 100%;
	&.fs-very-small { font-size: 50%; }
	&.fs-small      { font-size: 75%; }
	&.fs-large      { font-size: 125%; }
	&.fs-very-large { font-size: 150%; }
}`}</code>
				</Fragment>
				<Fragment component="p">
					<small>
						<small>
							<em>
								Але варто розуміти, що також будуть враховані і
								налаштування браузера або девайсу
							</em>
						</small>
					</small>
				</Fragment>
			</RemSlide>

			<RemSlide transition="slide-in slide-out" bgColor="dark">
				<p>Продовжуйте далі :)</p>
				<p className="op-60">
					<small>Періодично перевіряйте зміну масштабу тексту</small>
				</p>
			</RemSlide>

			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<h3>Оптимізовуйте свою роботу</h3>
				<ul>
					<Fragment component="li">
						<b>Дизайн токени</b>: <code>--font-size-base</code>
					</Fragment>
					<Fragment component="li">
						{' '}
						<b>Препроцесори</b>: Sass, Less, etc.
					</Fragment>
					<Fragment component="li">
						<b>CSS функції</b>:{' '}
						<code>calc( var(--x) / 16 * 1rem )</code>
					</Fragment>
				</ul>
			</RemSlide>

			<RemSlide transition="slide-in zoom-out" bgColor="lighter">
				<h3>Використовуйте готові рішення</h3>
				<p className="op-60">
					<small>
						<small>
							Більшість сучасних систем використовують саме{' '}
							<code>rem</code>
						</small>
					</small>
				</p>
				<ul style={{ fontSize: '0.8em' }}>
					<Fragment component="li">
						<b>Tailwind CSS</b> — за замовчуванням працює з{' '}
						<code>rem</code>.
					</Fragment>
					<Fragment component="li">
						<b>Material UI (MUI)</b> — використовує <code>rem</code>{' '}
						для елементів типографіки
					</Fragment>
					<Fragment component="li">
						<b>Carbon (IBM)</b> — масштабна система на базі{' '}
						<code>rem</code>
					</Fragment>
					<Fragment component="li">
						<em>Та багато інших...</em>
					</Fragment>
				</ul>
			</RemSlide>

			<RemSlide transition="zoom-in slide-out" bgColor="dark">
				<p>
					Чи варто використовувати <code>rem</code> <br /> для
					елементів лейауту?
				</p>
				<Fragment component="p">
					<small className="op-60">It depends...</small>
				</Fragment>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<h3>Компромісний варіант</h3>
				<Fragment component="p">
					<code>rem</code> для "ліміту"
					<Fragment>, не для фіксованого розміру</Fragment>
				</Fragment>
				<Fragment component="p">
					<code>max-width | min-width</code>{' '}
					<s>
						<code>width</code>
					</s>
				</Fragment>

				<Fragment component="p">
					<code>max-height | min-height</code>{' '}
					<s>
						<code>height</code>
					</s>
				</Fragment>
			</RemSlide>

			<RemSlide transition="slide-in zoom-out" bgColor="lighter">
				<h3>Гнучкий варіант</h3>
				<Fragment component="p">Flexbox та/або CSS Grid</Fragment>

				<Fragment component="p">
					Float <em>(якщо релевантно)</em>
				</Fragment>
			</RemSlide>

			<RemSlide transition="zoom-in slide-out" bgColor="dark">
				<p>
					Де все ж таки краще використовувати <code>PX</code>?
				</p>

				<ul>
					<Fragment component="li">Тонкі лінії та бордери</Fragment>
					<Fragment component="li">
						SVG / Canvas (системи координат)
					</Fragment>
					<Fragment component="li">Медіа запити</Fragment>
					<Fragment component="li">
						Елементи лейауту (width, etc.)
					</Fragment>
				</ul>
			</RemSlide>
			<RemSlide transition="slide-in zoom-out" bgColor="dark">
				<p>
					<code>PX</code> лишається корисним там, <br /> де{' '}
					<u>текст не задіяний напряму</u>
				</p>
				<br />
				<p>
					aбо де потрібна <u>абсолютна точність</u>{' '}
					позиціонування/розмірів
				</p>
			</RemSlide>
		</>
	);
}
