import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function WCAG() {
	return (
		<>
			<RemSlide transition="slide-in slide-out" bgColor="light">
				<p>Але це не просто UX-нюанс</p>
				<Fragment component="p">
					Це порушення стандартів доступності,
					<br />
					зокрема — WCAG
				</Fragment>
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
