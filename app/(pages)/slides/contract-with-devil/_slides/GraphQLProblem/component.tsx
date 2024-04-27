import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import {
	HighLevelArch,
	highLevelArchStyles,
} from '../../_components/HighLevelArch';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function GraphQLProblem(): ReactElement {
	return (
		<>
			<Section bgColor="accent" transition="slide-in slide-out">
				<p>
					Якщо все добре... <br />
					<span className="like-h3">тоді в чому проблема?</span>
				</p>
			</Section>
			<Section bgColor="accent">
				<p>
					Проблема є! <br />{' '}
					<Fragment>Я читав про неї в книжках</Fragment> <br />{' '}
					<Fragment className="like-h3">
						але я її не розумів до кінця!
					</Fragment>
				</p>
			</Section>
			<Section bgColor="dark">
				<h3>Фокус прикладу 🪄</h3>
			</Section>
			<Section bgColor="light">
				<FragmentEqualComponent stage="initial" />
			</Section>
			<Section bgColor="light">
				<h3>Ми самі себе робимо повністю залежними від АПІ!</h3>
			</Section>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="when" className={styles.when}>
					Коли
				</h3>
				<h3>АПІ зміниться...</h3>
			</Section>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="when" className={styles.when}>
					Якщо
				</h3>
				<h3>АПІ зміниться...</h3>
			</Section>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="when" className={styles.when}>
					<s>Якщо</s> <br /> Коли
				</h3>
				<h3>АПІ зміниться...</h3>
			</Section>
			<Section
				bgColor="light"
				className={clsx(
					styles.circles,
					highLevelArchStyles.initialStructure,
					highLevelArchStyles.showGreenArrows
				)}
			>
				<HighLevelArch />
			</Section>

			<Section bgColor="light" autoAnimate>
				<p>
					<em>Так от,</em> <br />
					Коли АПІ буде змінюватись
				</p>
				<Fragment className="like-h3">
					Потрібно постійно вносити <br /> правки в код шаблону!
				</Fragment>
			</Section>

			<Section bgColor="dark" className="flex-section">
				<h3>
					Хіба не в цьому був сенс <br /> авто-генерації контрактів?
				</h3>
				<ul>
					<RollingFragment component="li" fx="fade-up">
						Оновлюємо кодо-генерацію
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						TypeScript бачить невідповідності 🚨🚨🚨
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						Видає нам помилки
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						Ми їх <em>швидко фіксимо</em> і все знову добре!{' '}
						<Fragment>&nbsp;✅&nbsp;</Fragment>
					</RollingFragment>
				</ul>
			</Section>

			<Section bgColor="darker">
				<h3>&quot;Швидко фіксити&quot;</h3>
				<Fragment component="p">Можна коли система не велика</Fragment>
			</Section>

			<Section bgColor="darker">
				<h3>Чим більше контрактів,</h3>
				<Fragment component="p">
					тим менша ваша швидкість внесення правок
				</Fragment>
			</Section>

			<Section bgColor="darker">
				<h3>
					Тому що <br /> знання з АПІ будуть всюди!
				</h3>
				<Fragment component="p">І по декілька разів!</Fragment>
			</Section>

			<Section bgColor="darker">
				<h3>
					Система стає <br />
					Картковим будинком
				</h3>
				<Fragment component="p">
					достатньо одного, необережного, пчиху в АПІ, <br />
					щоб його рознесло!
				</Fragment>
			</Section>
			<Section bgColor="dark">
				<h3>Якщо ви думаєте, що я вас “лякаю”...</h3>
			</Section>
			<Section bgColor="dark" className="flex-section">
				<h3>
					Реальний проєкт <br />
					який ми ведемо вже 2 роки
				</h3>
				<ul className={styles.projectCtxList}>
					<RollingFragment component="li">
						ERP система
					</RollingFragment>
					<RollingFragment component="li">
						Моноропозиторій для фронта
					</RollingFragment>
					<RollingFragment component="li">
						Мульти-зони (Next.js)
					</RollingFragment>
					<RollingFragment component="li">4 команди</RollingFragment>
					<RollingFragment component="li">3 команди</RollingFragment>
				</ul>
			</Section>
			<Section bgColor="dark">
				<h3>Трохи цифр з проєкту</h3>
				<div className="r-stack">
					<img
						alt=""
						className="fragment fade-out"
						data-fragment-index="0"
						src="/static/slides-contract-with-devil/operations-qty.png"
					/>
					<img
						alt=""
						className="fragment current-visible"
						data-fragment-index="0"
						src="/static/slides-contract-with-devil/fragments-qty.png"
					/>
				</div>
			</Section>
			<Section bgColor="dark" autoAnimate>
				<h3>Приклад зміни Сутностей</h3>
				<div className={styles.expand}>
					<table
						className={clsx(
							styles.tableCode,
							styles.tableCodeCompact
						)}
					>
						<tbody>
							<tr>
								<td>
									<pre data-id="code-animate">
										<code className="hljs graphql">{`


                        fragment UserMiniCard on User {
                            id
                            shortName
                            avatar
                        }



`}</code>
									</pre>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Section>

			<Section bgColor="dark" autoAnimate>
				<h3>Приклад зміни Сутностей</h3>
				<div className={styles.expand}>
					<table
						className={clsx(
							styles.tableCode,
							styles.tableCodeCompact
						)}
					>
						<tbody>
							<tr>
								<td width="48%">
									<pre data-id="code-animate">
										<code className="hljs graphql">{`


fragment UserMiniCard on User {
    id
    shortName
    avatar
}



`}</code>
									</pre>
								</td>
								<td>&rArr;</td>
								<td width="48%">
									<pre data-id="code-animate">
										<code className="hljs graphql">{`fragment UserMiniCard on Employee {
    id
    shortName
    profile {
        settings {
            userPhoto {
                value
            }
        }
    }
}
`}</code>
									</pre>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Section>
			<Section bgColor="darker" className="flex-section">
				<h3>Факапи...</h3>
			</Section>
			<Section bgColor="accent" className="flex-section">
				<h3>
					“Бекенди” внесли <br />
					ламаючі зміни в АПІ
				</h3>
				<div className={styles.expand}>
					<div>
						<RollingFragment component="div" fx="fade-up">
							TypeScript помилок було стільки, що проєкт не
							запускався.
						</RollingFragment>
						<RollingFragment component="div" fx="fade-up">
							Майже 6 годин ми доводили все до ладу.
						</RollingFragment>
						<RollingFragment component="div" fx="fade-up">
							4 команди (11 фронтів в загальному складі)
						</RollingFragment>
						<RollingFragment component="div" fx="fade-up">
							не робили нічого з того, що запланували на спринт
						</RollingFragment>
					</div>
				</div>
			</Section>

			<Section bgColor="accent" className="flex-section">
				<h3>11 х 6 = 66 годин</h3>
				<div className={styles.expand}>
					<RollingFragment component="div" fx="fade-up">
						Помножте цей час на рейти ваших розробників,
					</RollingFragment>
					<RollingFragment component="div" fx="fade-up">
						додайте простій на спринту,
					</RollingFragment>
					<RollingFragment component="div" fx="fade-up">
						отримайте суму в яку вам обійдеться такий факап
					</RollingFragment>
				</div>
			</Section>
		</>
	);
}

function FragmentEqualComponent(props: {
	stage:
		| 'initial'
		| 'deprecated'
		| 'titleVariants'
		| 'changeComponent'
		| 'removeDeprecation';
}): ReactElement {
	let titleInFragment = 'title';
	let titleInComponent = 'product.title';
	let componentEnd = '';

	switch (props.stage) {
		case 'deprecated':
			titleInFragment = 'title @deprecated';
			break;
		case 'titleVariants':
			componentEnd = '\n\n\n\n';
			titleInFragment = `title @deprecated
    titleVariants {
        current
    }`;
			break;
		case 'changeComponent':
			componentEnd = '\n\n\n\n';
			titleInComponent = `product.titleVariants.current`;
			titleInFragment = `title @deprecated
    titleVariants {
        current
    }`;
			break;
		case 'removeDeprecation':
			titleInComponent = `product.titleVariants.current`;
			componentEnd = '\n\n\n';
			titleInFragment = `titleVariants {
        current
    }`;
			break;
	}

	return (
		<>
			<h3 data-id="code-title">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API === Component
			</h3>
			<div className={styles.expand}>
				<table className={styles.tableCode}>
					<tbody>
						<tr>
							<td width="50%">
								<pre
									data-id="code-animation"
									className="code-wrapper-hide-numbers"
								>
									<code
										className="hljs graphql"
										data-line-numbers={true}
									>
										{`fragment ProductCard on Product {
    id
    ${titleInFragment}
    price
    status
    covers {
        ...CoverCarousel
    }
}`}
									</code>
								</pre>
							</td>
							<td width="50%">
								<pre
									data-id="code-animation"
									className="code-wrapper-hide-numbers"
								>
									<code
										className="hljs tsx"
										data-line-numbers={true}
									>
										{`<article>
    <CoverCarousel covers={product.covers} />
    <header>
        <h2>{${titleInComponent}}</h2>
        <span>{product.status}</span>
    </header>
    <p>Price: {product.price}</p>
    ...
</article>${componentEnd}`}
									</code>
								</pre>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
