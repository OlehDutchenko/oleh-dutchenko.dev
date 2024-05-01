import { ReactElement } from 'react';
import styles from './styles.module.css';

export function ApiVsTemplate(props: {
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
	);
}
