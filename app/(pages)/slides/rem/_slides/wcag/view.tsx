import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function WCAG() {
	return (
		<>
			<RemSlide transition="slide-in slide-out" bgColor="light">
				<p>Це про відповідність стандартам доступності</p>
			</RemSlide>
			<RemSlide transition="slide-in zoom-out" bgColor="light">
				<h3>WCAG 2.2</h3>
				<p>
					<a
						href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
						target="_blank"
					>
						SС 1.4.4: Resize Text (Level AA)
					</a>
				</p>
			</RemSlide>
			<RemSlide transition="zoom-in zoom-out" bgColor="light">
				<blockquote>
					<p>
						<strong>Критерії успішності</strong> <br />
					</p>
					<p className="op-70">
						За винятком підписів та зображень тексту, розмір тексту
						можна змінювати без допоміжних технологій до 200
						відсотків без втрати змісту чи функціональності.
					</p>
				</blockquote>
			</RemSlide>
			<RemSlide transition="zoom-in zoom-out" bgColor="light">
				<blockquote>
					<p>
						<strong>Мета</strong> <br />
					</p>
					<p className="op-70">
						<small>
							Забезпечити візуальне відображення тексту, без
							необхідності використання допоміжних технологій
							(таких як &quot;збільшувальне скло&quot; тощо).
						</small>
					</p>
					<p className="op-70">
						<small>
							Користувачі можуть отримати користь від
							масштабування всього вмісту веб-сторінки, <br />
							<b>але текст є найважливішим</b>.
						</small>
					</p>
				</blockquote>
			</RemSlide>
			<RemSlide transition="zoom-in slide-out" bgColor="lighter">
				<p>
					<b>Зміна масштабу вікна</b> <br /> та <br />{' '}
					<b>зміна розміру шрифту</b> <br /> це <br />
					<em>не одне й те саме</em>
				</p>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="light">
				<h3>
					Механізми впливу <br /> на розмір тексту
				</h3>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="light">
				<p>1. Налаштування браузера</p>
				<ul>
					<li>
						<b>Chrome</b> <br />{' '}
						<small>
							<small>Settings → Appearance → Font size</small>
						</small>
					</li>
					<li>
						<b>Firefox</b> <br />
						<small>
							<small>
								Preferences → Language and Appearance → Fonts
							</small>
						</small>
					</li>
					<li>
						<b>Safari</b> <br />
						<small>
							<code>⌥⌘+</code> <code>⌥⌘-</code>{' '}
							<small>
								<em>(працює лише для вкладки браузера)</em>
							</small>
						</small>
					</li>
				</ul>
			</RemSlide>

			<RemSlide transition="slide-in slide-out" bgColor="light">
				<p>
					2. Десктопні ОС <br />
					<small>
						<small>
							<em>
								Можуть впливати на певний перелік власних
								програм
							</em>
						</small>
					</small>
				</p>
				<ul>
					<li>
						<b>macOS</b> <br />{' '}
						<small>
							<small>
								System Settings → Accessibility → Display → Text
								size
							</small>
						</small>
					</li>
					<li>
						<b>Windows</b> <br />
						<small>
							<small>Settings → Accessibility → Text size</small>
						</small>
					</li>
					<li>
						<b>Linux</b> <br />
						<small>
							<small>
								Settings → Accessibility → Large Text <br />
								<em>(залежить від білду)</em>
							</small>
						</small>
					</li>
				</ul>
			</RemSlide>

			<RemSlide transition="slide-in zoom-out" bgColor="light">
				<p>3. Мобільні пристрої</p>
				<p>
					<small>
						<small>
							<em>
								Браузери на мобільних пристроях, <br />{' '}
								зазвичай, використовують параметри ОС
							</em>
						</small>
					</small>
				</p>
				<ul>
					<li>
						<b>iOS / iPadOS </b> <br />{' '}
						<small>
							<small>
								Settings → Accessibility → Display & Text Size
							</small>
						</small>
					</li>
					<li>
						<b>Android</b> <br />
						<small>
							<small>
								Settings → Display → Font size and display size
							</small>
						</small>
					</li>
				</ul>
			</RemSlide>
			<RemSlide transition="zoom-in zoom-out" bgColor="accent_rem">
				<p>
					Зум сторінки <br /> — допустимий, але не єдиний інструмент
				</p>
			</RemSlide>
			<RemSlide transition="zoom-in zoom-out" bgColor="accent_rem">
				<p>
					Якщо інтерфейс ігнорує налаштування шрифту користувача — це
					порушення критерію доступності: “Зміна розміру тексту”
				</p>
			</RemSlide>
		</>
	);
}
