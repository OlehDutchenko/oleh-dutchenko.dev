import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function ChallengeCustomControls() {
	return (
		<>
			<RemSlide transition="zoom-in slide-out" bgColor="dark">
				<div className="op-50">
					<small>
						<small>Виклик II</small>
					</small>
				</div>
				<h3>Ручні контролери</h3>
				<Fragment component="p">для масштабування тексту</Fragment>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<p>
					Такі контролери можна побачити, наприклад, на сайтах
					державних установ або банків
				</p>
				<p className="op-60">
					<small>
						Найчастіше в хедері розташовані кнопки: <code>A-</code>{' '}
						<code>A</code> <code>A+</code>
					</small>
				</p>
			</RemSlide>
			<RemSlide transition="slide-in zoom-out" bgColor="lighter">
				<p>Проте їх реалізація не така вже й складна!</p>
				<p className="op-60">
					<small>
						Можна реалізувати кастомне масштабування буквально в
						кілька рядків коду, i вже в наступних слайдах
						подивимось, як саме це працює
					</small>
				</p>
			</RemSlide>
		</>
	);
}
