import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import clsx from 'clsx';
import { ReactElement } from 'react';
import {
	ApiVsTemplate,
	apiVsTemplateStyles,
} from '../../_components/ApiVsTemplate';
import { Fragment } from '../../_components/Fragment';
import { Section } from '../../../_components/Section';
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
				<h3>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API === Component
				</h3>
				<ApiVsTemplate stage="initial" />
			</Section>
			<Section bgColor="light">
				<h3>Ми самі себе робимо повністю залежними від АПІ!</h3>
			</Section>
			<Section bgColor="light" autoAnimate className="flex-section">
				<div className={styles.when}>
					<span data-id="wh1">Коли</span>
				</div>
				<p>АПІ буде мінятись...</p>
			</Section>
			<Section bgColor="light" autoAnimate className="flex-section">
				<div className={styles.when}>
					<span data-id="wh2">Якщо?</span>
				</div>
				<p>АПІ буде мінятись...</p>
			</Section>
			<Section bgColor="light" autoAnimate className="flex-section">
				<div className={styles.when}>
					<span data-id="wh2">
						<s>Якщо?</s>
					</span>
					<span data-id="wh3">&nbsp;Коли</span>
				</div>
				<p>АПІ буде мінятись...</p>
				<RollingFragment maxHeight={173}>
					<span className="like-h3">
						Потрібно постійно вносити <br /> правки в код шаблону!
					</span>
				</RollingFragment>
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
				<h3>Знання з АПІ будуть всюди!</h3>
				<Fragment component="p">І по декілька разів!</Fragment>
			</Section>

			<Section bgColor="darker">
				<p>
					Система стає <br />
					<span className="like-h3">Картковим будинком</span>
				</p>
				<Fragment component="p">
					Достатньо одного, необережного, пчиху в АПІ, <br />
					щоб його рознесло!
				</Fragment>
			</Section>
			<Section bgColor="dark">
				<p>
					Якщо ви думаєте,
					<br />
					<span className="like-h3">що я вас “лякаю”...</span>
				</p>
			</Section>
			<Section bgColor="dark" className="flex-section">
				<p>
					Реальний проєкт
					<br />
					<span className="like-h3">який ми ведемо вже 2 роки</span>
				</p>
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
				<h3>Трохи цифр для наочності</h3>
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
				<div className={apiVsTemplateStyles.expand}>
					<table
						className={clsx(
							apiVsTemplateStyles.tableCode,
							apiVsTemplateStyles.tableCodeCompact
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
				<div className={apiVsTemplateStyles.expand}>
					<table
						className={clsx(
							apiVsTemplateStyles.tableCode,
							apiVsTemplateStyles.tableCodeCompact
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
				<div className={apiVsTemplateStyles.expand}>
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
							не робили нічого з того, що запланували на спринт!
						</RollingFragment>
					</div>
				</div>
			</Section>

			<Section bgColor="dark" className="flex-section">
				<h3>Так це ж бекенд винний...</h3>
				<div>
					<RollingFragment component="div" fx="fade-up">
						вони зламали АПІ,
					</RollingFragment>
					<RollingFragment
						component="div"
						fx="fade-up"
						maxHeight={100}
					>
						і взагалі, чому не використовували директиву
						депрекейтед, щоб поступово не переїхати?
					</RollingFragment>
				</div>
			</Section>

			<Section bgColor="dark" className="flex-section">
				<div>
					Так, можна звинувачувати бекенд... <br />
					<Fragment>Але це не спростовує очевидний факт</Fragment>
				</div>
				<RollingFragment component="h3">
					Ми залежні від АПІ у всьому!
				</RollingFragment>
				<RollingFragment component="div">
					Ми привʼязані до нього по рукам і ногам
				</RollingFragment>
			</Section>

			<Section bgColor="dark" className="flex-section">
				<div>
					Мабуть, можна миритись з цим, <br /> вважаючи, що це
					нормально...
				</div>
				<RollingFragment component="h3" className="like-h3">
					Фронтенд є &quot;веб-мордою&quot; даних
				</RollingFragment>
				<RollingFragment component="div">
					Якщо дані міняються, фронт завжди &quot;підганяється&quot;
				</RollingFragment>
			</Section>

			<Section bgColor="dark" className="flex-section">
				<h3>І це, відносно, не дорого...</h3>
				<RollingFragment component="h1" maxHeight={120}>
					<b>Хіба ні?</b>
				</RollingFragment>
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
						отримайте суму в яку вам обійдеться такий факап.
					</RollingFragment>
					<RollingFragment component="div" fx="fade-up">
						А чи буде він один?
					</RollingFragment>
				</div>
			</Section>
		</>
	);
}
