import { AccentElement } from '@/_components/AccentElement';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import {
	HighLevelArch,
	highLevelArchStyles,
} from '../../_components/HighLevelArch';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function GraphQLFocus(): ReactElement {
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
			<section>
				<Section bgColor="light" transition="slide-in slide-out">
					<h3>Варіанти збігу АПІ з UI:</h3>
				</Section>
				<Section bgColor="light" transition="slide-in slide-out">
					<AccentElement>
						<blockquote>
							<footer>Нескладна домена область</footer>
							<hr style={{ width: '10%' }} />
							<div style={{ padding: '0 2rem' }}>
								Прості та пласкі структури даних
							</div>
						</blockquote>
					</AccentElement>
				</Section>
				<Section bgColor="light" transition="slide-in slide-out">
					<AccentElement>
						<blockquote>
							<footer>REST в голові</footer>
							<hr style={{ width: '10%' }} />
							<div style={{ padding: '0 2rem' }}>
								Проф. деформація авторів АПІ
							</div>
						</blockquote>
					</AccentElement>
				</Section>
				<Section
					bgColor="light"
					transition="slide-in slide-out"
					className={clsx(
						styles.circles,
						highLevelArchStyles.initialStructure,
						highLevelArchStyles.showGreenArrows,
						highLevelArchStyles.showRedArrows
					)}
				>
					<HighLevelArch />
					<AccentElement className={styles.accentText}>
						<blockquote>
							<footer>Порушення “Правила залежностей”</footer>
							<hr style={{ width: '10%' }} />
							<div style={{ padding: '0 2rem' }}>
								АПІ готується під потреби UI
							</div>
						</blockquote>
					</AccentElement>
				</Section>
			</section>
			<Section bgColor="light" autoAnimate>
				<FragmentEqualComponent changeFragment />
			</Section>
			<Section bgColor="light" autoAnimate>
				<FragmentEqualComponent changeFragment changeComponent />
				<div className={clsx('fragment', styles.video)}>
					<video
						data-autoplay={true}
						loop={true}
						autoPlay={true}
						muted={true}
						playsInline={true}
						src="/static/slides-contract-with-devil/jack-nicholson.mp4"
					/>
				</div>
			</Section>

			<Section bgColor="light">
				<p>
					Основа мого прикладу: <br />
					<Fragment className="like-h3">
						Використання знань з АПІ <br /> безпосередньо в коді
					</Fragment>
				</p>
			</Section>
		</>
	);
}

function FragmentEqualComponent(props: {
	changeFragment?: boolean;
	changeComponent?: boolean;
}): ReactElement {
	const titleInFragment = props.changeFragment
		? `# title @deprecated
    titleVariants {
        current
    }`
		: 'title';

	const titleInComponent = props.changeComponent
		? `product.titleVariants.current`
		: 'product.title';

	const componentEnd = props.changeFragment ? '\n\n\n\n' : '';

	const eq =
		props.changeFragment && !props.changeComponent ? ' !== ' : ' === ';

	return (
		<>
			<h3 data-id="code-title">Fragment{eq}Component</h3>
			<div className={styles.tableExpand}>
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
