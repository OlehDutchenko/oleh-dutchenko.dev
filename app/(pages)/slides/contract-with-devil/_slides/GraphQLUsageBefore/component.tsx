import clsx from 'clsx';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function GraphQLUsageBefore(): ReactElement {
	return (
		<>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="code-title">ProductCard / types.ts</h3>
				<pre
					data-id="code-animation"
					className={clsx(
						'code-wrapper-hide-numbers'
						// 'code-wrapper-bg-lines'
					)}
				>
					<code
						className="hljs ts"
						data-trim={true}
						data-line-numbers="1,4"
					>
						{`import { FragmentProductCard } from '@/GraphQL/generated';

export interface Props {
    product: FragmentProductCard;
    ...
}`}
					</code>
				</pre>
			</Section>
			<Section bgColor="light" autoAnimate>
				<h3 data-id="code-title">ProductCard / types.ts</h3>
				<pre
					data-id="code-animation"
					className={clsx(
						'code-wrapper-hide-numbers'
						// 'code-wrapper-bg-lines'
					)}
				>
					<code
						className="hljs ts"
						data-trim={true}
						data-line-numbers="1,4"
					>
						{`import { FragmentProductCard } from '@/GraphQL/generated';

export interface Props {
    product: FragmentProductCard;
    ...
}`}
					</code>
				</pre>
				<br />
				<h3 data-id="code-title">CoverCarousel / types.ts</h3>
				<pre
					data-id="code-animation"
					className={clsx(
						'code-wrapper-hide-numbers'
						// 'code-wrapper-bg-lines'
					)}
				>
					<code
						className="hljs ts"
						data-trim={true}
						data-line-numbers="1,4"
					>
						{`import { FragmentCoverCarousel } from '@/GraphQL/generated';

export interface Props {
    covers: FragmentCoverCarousel[];
    ...
}`}
					</code>
				</pre>
			</Section>
		</>
	);
}
