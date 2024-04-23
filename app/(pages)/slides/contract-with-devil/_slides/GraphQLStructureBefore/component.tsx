import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function GraphQLStructureBefore(): ReactElement {
	return (
		<>
			<Section bgColor="dark" transition="slide-in slide-out">
				<h3>Як ми використовували GraphQL</h3>
			</Section>

			<Section
				autoAnimate
				bgColor="light"
				transition="slide-in slide-out"
			>
				<h3 data-id="code-title">
					Умовний віджет &quot;Список товарів&quot;
				</h3>
				<div className={styles.wrapper}>
					<pre
						data-id="code-animation"
						className={clsx(
							'code-wrapper-hide-next',
							'code-wrapper-hide-numbers',
							'code-wrapper-bg-lines',
							styles.structurePreElement
						)}
					>
						<code
							className="hljs bash"
							data-trim={true}
							data-line-numbers="1-2|3|3|4|5|2-5|5|6|6-7|8|8-9|10-12|13-14|7,14|15-17|18-19|14,19|7,14,19|20-22|5,7,14,19,23-24"
						>
							{getProductsStructure()}
						</code>
					</pre>
					<Demo className={styles.demoProductsUsage1}>
						{getProductsUsage1Code()}
					</Demo>
					<Demo className={styles.demoProductsView1}>
						{getProductsView1Code()}
					</Demo>
					<Demo className={styles.demoProductsQuery1}>
						{getProductsQuery1Code()}
					</Demo>
					<Demo className={styles.demoProductCardFragment1}>
						{getProductCardFragment1Code()}
					</Demo>
					<Demo
						className={styles.demoProductsQuery2}
						lines="2-4,8-10,13"
					>
						{getProductsQuery2Code()}
					</Demo>
					<Demo className={styles.demoCoverCarouselFragment1}>
						{getCoverCarouselFragment1Code()}
					</Demo>
					<Demo
						className={styles.demoProductCardFragment2}
						lines="2-4,11-13,16"
					>
						{getProductCardFragment2Code()}
					</Demo>
				</div>
			</Section>
		</>
	);
}

function Demo(props: {
	className: string;
	lines?: string;
	children: ReactNode;
}): ReactElement {
	return (
		<div className={clsx(styles.demo, props.className)}>
			<pre className={clsx(props.lines && 'code-wrapper-hide-numbers')}>
				<code className="hljs ts" data-line-numbers={props.lines}>
					{props.children}
				</code>
			</pre>
		</div>
	);
}

function getProductsStructure(): string {
	return `├─ Widgets/
│   └─ Products/
│       ├─ index.ts
│       ├─ types.ts
│       ├─ view.tsx
│       ├─ gql/
│       │   └─ QUERY_PRODUCTS.ts
│       └─ components/
│           └─ ProductCard
│               ├─ index.ts
│               ├─ types.ts
│               ├─ view.tsx
│               ├─ gql/
│               │   └─ FRAGMENT_PRODUCT_CARD.ts
│               └─ components/
│                   └─ CoverCarousel/
│                       ├─ ...
│                       └─ gql/
│                           └─ FRAGMENT_COVER_CAROUSEL.ts
├─ GraphQL/
│   └─ generated/
│       ├─ index.ts
│       ├─ types.ts
│       └─ enums.ts
`;
}

function getProductsUsage1Code(): string {
	return `import { ... } from 'Widgets/Products'; // Correct
import { ... } from 'Widgets/Products/inner/path'; // Wrong`;
}

function getProductsView1Code(): string {
	return `import { useQuery } from '@apollo/client';
import { Props } from './types';

export function Products(props: Props): ReactElement {
    const { data, loading, error } = useQuery(/* ... */);
    ...
}`;
}

function getProductsQuery1Code(): string {
	return `import { qgl } from '@apollo/client';

export const QUERY_PRODUCTS = gql\`
    query Products($input: ProductsInput!) {
        products(input: $input) {
            ...
        }
    }
\`;`;
}

function getProductCardFragment1Code(): string {
	return `import { qgl } from '@apollo/client';

export const FRAGMENT_PRODUCT_CARD = gql\`
    fragment ProductCard on Product {
        id
        title
        price
        status
    }
\`;`;
}

function getProductsQuery2Code(): string {
	return `import { qgl } from '@apollo/client';
import { 
    FRAGMENT_PRODUCT_CARD
} from '../components/ProductCard';

export const QUERY_PRODUCTS = gql\`
    query Products($input: ProductsInput!) {
        products(input: $input) {
            ...ProductCard
        }
    }
    
    $\{FRAGMENT_PRODUCT_CARD}
\`;`;
}

function getCoverCarouselFragment1Code(): string {
	return `import { qgl } from '@apollo/client';

export const FRAGMENT_COVER_CAROUSEL = gql\`
    fragment CoverCarousel on ProductCover {
        id
        url
        type
    }
\`;`;
}

function getProductCardFragment2Code(): string {
	return `import { qgl } from '@apollo/client';
import { 
    FRAGMENT_COVER_CAROUSEL
} from '../components/CoverCarousel';

export const FRAGMENT_PRODUCT_CARD = gql\`
    fragment ProductCard on Product {
        id
        title
        price
        covers {
            ...CoverCarousel
        }
    }
    
    $\{FRAGMENT_COVER_CAROUSEL}
\`;`;
}
