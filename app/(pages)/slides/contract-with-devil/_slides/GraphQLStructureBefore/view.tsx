import clsx from 'clsx';
import { ReactElement } from 'react';
import { Demo } from '../../_components/Demo';
import { Section } from '../../../_components/Section';
import styles from './styles.module.css';

export function GraphQLStructureBefore(): ReactElement {
	return (
		<>
			<Section bgColor="dark" transition="slide-in slide-out">
				<h3>
					Як ми використовували <br /> GraphQL + TypeScript <br />і
					React
				</h3>
			</Section>

			<Section bgColor="dark">
				<p>
					Умовний віджет <br />
					<span className="like-h3">&quot;Список товарів&quot;</span>
				</p>
			</Section>

			<Section bgColor="light" className={styles.sectionCode}>
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
							data-line-numbers="1-2|3|3|4|5|2-5|5|6|6-7|8|8-9|10-12|13-14|7,14|15-17|18-19|14,19|7,14,19|20-22|7,14,19,23-24|9,11,20-24|9,12,20-24|16-17,20-24"
						>
							{getProductsStructure()}
						</code>
					</pre>
					<Demo className={styles.demoProductsUsage1}>
						{getProductsUsage1Code()}
					</Demo>
					<Demo className={styles.demoProductsView1} lang="tsx">
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
						lines="2-4,7,12-14,17"
					>
						{getProductCardFragment2Code()}
					</Demo>
					<Demo className={styles.demoProductCardTypes1} lines="1,4">
						{getProductCardTypes1Code()}
					</Demo>
					<Demo
						className={styles.demoProductCardView1}
						lines="1-4,7,9-10,12,13"
					>
						{getProductCardView1Code()}
					</Demo>
					<Demo
						className={styles.demoCoverCarouselTypes1}
						lines="1,4"
					>
						{getCoverCarouselTypes1Code()}
					</Demo>
				</div>
			</Section>
		</>
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
	return `import { ... } from '@/Widgets/Products'; // Correct
import { ... } from '@/Widgets/Products/inner/path'; // Avoid`;
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
        sourceTypeEnum
    }
\`;`;
}

export function getProductCardFragment2Code(): string {
	return `import { qgl } from '@apollo/client';
import { 
    FRAGMENT_COVER_CAROUSEL
} from '../components/CoverCarousel';

export const FRAGMENT_PRODUCT_CARD = gql\`
    fragment ProductCard on Product {
        id
        title
        price
        status
        covers {
            ...CoverCarousel
        }
    }
    
    $\{FRAGMENT_COVER_CAROUSEL}
\`;`;
}

function getProductCardTypes1Code(): string {
	return `import { FragmentProductCard } from '@/GraphQL/generated';

export interface Props {
    product: FragmentProductCard;
    ...
}`;
}

function getProductCardView1Code(): string {
	return `import { Props } from './types';
import { CoverCarousel } from './components/CoverCarousel';

export function ProductCard({ product }: Props): ReactElement {
    return (
        <article>
            <CoverCarousel covers={product.covers} />
            <header>
                <h2>{product.title}</h2>
                <span>{product.status}</span>
            </header>
            <p>Price: {product.price}</p>
            ...
        </article>
    )
}`;
}

function getCoverCarouselTypes1Code(): string {
	return `import { FragmentCoverCarousel } from '@/GraphQL/generated';

export interface Props {
    covers: FragmentCoverCarousel[];
    ...
}`;
}
