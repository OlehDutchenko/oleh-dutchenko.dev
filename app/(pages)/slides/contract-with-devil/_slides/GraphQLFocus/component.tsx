import clsx from 'clsx';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function GraphQLFocus(): ReactElement {
	return (
		<>
			<Section bgColor="accent" transition="slide-in slide-out">
				<h3>
					Якщо все добре... <br /> тоді в чому проблема?
				</h3>
			</Section>
			<Section bgColor="accent" transition="slide-in slide-out">
				<h3>Фокус-покус 🪄</h3>
			</Section>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="code-title">Fragment === Component</h3>
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
											data-trim={true}
											data-line-numbers={true}
										>
											{`fragment ProductCard on Product {
    id
    title
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
        <h2>{product.title}</h2>
        <span>{product.status}</span>
    </header>
    <p>Price: {product.price}</p>
    ...
</article>`}
										</code>
									</pre>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Section>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="code-title">Fragment === Component</h3>
				<div className={styles.tableExpand}>
					<table className={clsx(styles.tableCode)}>
						<tbody>
							<tr>
								<td width="50%">
									<pre
										data-id="code-animation"
										className="code-wrapper-hide-numbers"
									>
										<code
											className="hljs graphql"
											data-trim={true}
											data-line-numbers={true}
										>
											{`fragment ProductCard on Product {
    id
    title {
        current
    }
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
        <h2>{product.title}</h2>
        <span>{product.status}</span>
    </header>
    <p>Price: {product.price}</p>
    ...
</article>


`}
										</code>
									</pre>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Section>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="code-title">Fragment === Component</h3>
				<div className={styles.tableExpand}>
					<table className={clsx(styles.tableCode)}>
						<tbody>
							<tr>
								<td width="50%">
									<pre
										data-id="code-animation"
										className="code-wrapper-hide-numbers"
									>
										<code
											className="hljs graphql"
											data-trim={true}
											data-line-numbers={true}
										>
											{`fragment ProductCard on Product {
    id
    title {
        current
    }
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
        <h2>{product.title.current}</h2>
        <span>{product.status}</span>
    </header>
    <p>Price: {product.price}</p>
    ...
</article>


`}
										</code>
									</pre>
								</td>
							</tr>
						</tbody>
					</table>
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
				</div>
			</Section>
		</>
	);
}
