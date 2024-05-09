import { AccentElement } from '@/_components/AccentElement';
import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';
import { Demo } from '../../_components/Demo';
import { Fragment } from '../../_components/Fragment';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function SolutionForFrontend(): ReactElement {
	return (
		<>
			<Section bgColor="light" transition="slide-in slide-out">
				<p>
					Процес змін АПІ стабілізовано
					<br />
					<Fragment className="like-h3">А що по фронту?</Fragment>
				</p>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>База даних - це деталь!</h3>
				<Fragment data-id="anim">
					<div className={styles.dbText}>
						<AccentElement>
							<blockquote>
								<footer>
									&quot;Чиста архітектура&quot;, Розділ 30
								</footer>
								<div style={{ marginTop: 12 }}>
									<RollingFragment component="div">
										База даних - це утиліта, що забезпечує
										доступ до даних.
									</RollingFragment>
									<RollingFragment component="div">
										Із погляду архітектури вона не має
										жодного значення,
									</RollingFragment>
									<RollingFragment component="div">
										це деталь, механізм{' '}
										<em>
											(який може, і буде, змінюватись)
										</em>
										.
									</RollingFragment>
									<RollingFragment
										component="div"
										maxHeight={100}
									>
										<div className={styles.dbTextAccent}>
											Не дозволяйте низькорівневим
											механізмам <br />
											просочуватись в архітектуру системи!
										</div>
									</RollingFragment>
								</div>
							</blockquote>
						</AccentElement>
					</div>
				</Fragment>
			</Section>
			<Section bgColor="light" className="flex-section" autoAnimate>
				<p data-id="a">
					&ldquo;Чиста Архітектура&ldquo; та &ldquo;Чистий Kод&ldquo;
				</p>
				<h3 className={styles.sqlHeading}>
					<span data-id="b.1">Описують антипаттерни&nbsp;</span>
					<span data-id="b.2">SQL</span>
				</h3>
			</Section>
			<Section bgColor="light" className="flex-section" autoAnimate>
				<h3 className={styles.sqlHeading}>
					<span data-id="b.2">SQL</span>
					<span data-id="b.3">&nbsp;!==&nbsp;</span>
					<span data-id="b.4">GraphQL</span>
				</h3>
			</Section>
			<Section bgColor="light" className="flex-section" autoAnimate>
				<h3 className={styles.sqlHeading}>
					<span data-id="b.2">SQL</span>
					<span data-id="b.3">&nbsp;!==&nbsp;</span>
					<span data-id="b.4">GraphQL</span>
					<span data-id="b.5">&nbsp;?</span>
				</h3>
			</Section>
			<Section bgColor="light" className="flex-section" autoAnimate>
				<h3 className={styles.sqlHeading}>
					<span data-id="b.4">GraphQL</span>
					<span data-id="b.6">&nbsp;- це ресурс даних!</span>
				</h3>
				<RollingFragment>
					Це &quot;База Даних&quot; для клієнта (фронту)
				</RollingFragment>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>Як мінімізувати вплив БД?</h3>
				<RollingFragment maxHeight={100}>
					Працювати через &quot;шлюз&quot;, <br />
					який відділяє логіку від ресурсу.
				</RollingFragment>
			</Section>
			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription withoutList>
					{getProductsStructureBefore()}
				</CodeDescription>
			</Section>
			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription li={1}>
					{getProductsStructureBefore()}
				</CodeDescription>
			</Section>
			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription li={1} withoutFrg>
					{getProductsStructureAfter1()}
				</CodeDescription>
			</Section>
			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription li={2}>
					{getProductsStructureAfter1()}
				</CodeDescription>
			</Section>
			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription li={3}>
					{getProductsStructureAfter1(true)}
				</CodeDescription>
			</Section>
			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription li={4}>
					{getProductsStructureAfter2()}
				</CodeDescription>
			</Section>

			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription li={5}>
					{getProductsStructureAfter2(true)}
				</CodeDescription>
			</Section>
			<Section bgColor="light" className={styles.sectionCode} autoAnimate>
				<CodeDescription li={6}>
					{getProductsStructureAfter2(true)}
				</CodeDescription>
			</Section>
		</>
	);
}

interface Props extends PropsWithChildren {
	withoutList?: boolean;
	lines?: boolean | string;
	li?: number;
	withoutFrg?: boolean;
}
function CodeDescription({
	children,
	lines = '',
	withoutList,
	withoutFrg,
	li = 0,
}: Props): ReactElement {
	return (
		<>
			<p>Наше рішення:</p>
			<div className={styles.codeWrapper}>
				<div className={styles.codeAnim}>
					<pre
						data-id="code-animation"
						className={clsx(
							'code-wrapper-hide-numbers',
							'code-wrapper-bg-lines',
							styles.structurePreElement
						)}
					>
						<code className="hljs bash" data-line-numbers={lines}>
							{children}
						</code>
					</pre>
					<span className={styles.highlight} data-li={li + '.1'} />
					<span className={styles.highlight} data-li={li + '.2'} />
					{li >= 2 && (
						<>
							<Demo
								className={clsx(
									styles.demo,
									styles.demoProductCardTypes1
								)}
							>
								{getDemoProductCardTypes1()}
							</Demo>
							<Demo
								className={clsx(
									styles.demo,
									styles.demoProductCardView1
								)}
							>
								{getDemoProductCardView1()}
							</Demo>
							<Demo
								className={clsx(
									styles.demo,
									styles.demoFragmentProductCard1
								)}
							>
								{getDemoFragmentProductCard1()}
							</Demo>
							<Demo
								className={clsx(
									styles.demo,
									styles.demoNormalizeProduct1
								)}
							>
								{getDemoNormalizeProduct()}
							</Demo>
							<Demo
								className={clsx(
									styles.demo,
									styles.demoUseProducts1
								)}
							>
								{getDemoUseProducts1()}
							</Demo>
						</>
					)}
				</div>
				{withoutList ? null : (
					<ol className={styles.structureDescription}>
						{li >= 1 && (
							<li>
								Прибрати фрагменти GraphQL з коду компонентів
								{withoutFrg !== true && li === 1 && (
									<>
										<Fragment />
									</>
								)}
							</li>
						)}
						{li >= 2 && (
							<li>
								Вирішити задачу абстраговано від АПІ, описавши
								власний інтерфейс <br /> та реалізувавши його
								шаблон
								{li === 2 && (
									<>
										<Fragment />
										<Fragment />
									</>
								)}
							</li>
						)}
						{li >= 3 && (
							<li>
								На верхньому рівні описати запит
								{li === 3 && (
									<>
										<Fragment />
									</>
								)}
							</li>
						)}
						{li >= 4 && (
							<li>
								Описати нормалізацію АПІ даних <br /> в
								очікуваний формат
								{li === 4 && (
									<>
										<Fragment />
									</>
								)}
							</li>
						)}
						{li >= 5 && (
							<li>
								Виконати запит <br /> та нормалізувати дані
								{li === 5 && (
									<>
										<Fragment />
									</>
								)}
							</li>
						)}
						{li >= 6 && <li>Передати результат в компоненти</li>}
					</ol>
				)}
			</div>
		</>
	);
}

function getDemoProductCardTypes1(): string {
	return `export interface Props {
    product: Product;
}

export interface Product {
    id: string;
    name: string;
    formattedPrice: string;
    status: string;
    covers: (ImageCover | VideoCover | YoutubeCover)[];
}

interface ImageCover { ... }
interface VideoCover { ... }
interface YoutubeCover { ... }
`;
}

function getDemoProductCardView1(): string {
	return `import { Props } from './types';
import { CoverCarousel } from './components/CoverCarousel';

export function ProductCard({ product }: Props): ReactElement {
    return (
        <article>
            <CoverCarousel covers={product.covers} />
            <header>
                <h2>{product.name}</h2>
                <span>{product.status}</span>
            </header>
            <p>Price: {product.formattedPrice}</p>
            ...
        </article>
    )
}`;
}

function getDemoFragmentProductCard1(): string {
	return `import { qgl } from '@apollo/client';

export const FRAGMENT_PRODUCT_CARD = gql\`
    fragment ProductCard on Product {
        id
        title
        price
        status
        covers {
            id
            url
            sourceTypeEnum
        }
    }
\`;`;
}

function getDemoNormalizeProduct(): string {
	return `export function normalizeProduct(fragment: FragmentProductCard): Product {
    return {
        id: fragment.id,
        name: fragment.titleVariants.current,
        formattedPrice: formatPrice(fragment.price),
        status: normalizeStatus(fragment.status),
        covers: fragment.covers.map(normalizeCover)
    }
}

function formatPrice() { ... }
function normalizeStatus() { ... }
function normalizeCover() { ... }
`;
}

function getDemoUseProducts1(): string {
	return `type HookResult = {
    ...
    products: Product[];
}

export function useProducts(filter: Filter): HookResult {
    const { data, loading, error } = useQuery(QUERY_PRODUCTS);

    // handling loading and error...

    const products = data.products.map(normalizeProduct);

    // returning result...
}`;
}

function getProductsStructureBefore(): string {
	return `Products/
├─ index.ts
├─ types.ts
├─ view.tsx
├─ gql/
│  └─ QUERY_PRODUCTS.ts
└─ components/
   └─ ProductCard
      ├─ index.ts
      ├─ types.ts
      ├─ view.tsx
      ├─ gql/
      │  └─ FRAGMENT_PRODUCT_CARD.ts
      └─ components/
         └─ CoverCarousel/
            ├─ ...
            └─ gql/
               └─ FRAGMENT_COVER_CAROUSEL.ts

`;
}
function getProductsStructureAfter1(fragment?: boolean): string {
	return `Products/
├─ index.ts
├─ types.ts
├─ view.tsx
├─ gql/
│  ${
		fragment
			? `├─ QUERY_PRODUCTS.ts
│  └─ FRAGMENT_PRODUCT.ts`
			: '└─ QUERY_PRODUCTS.ts'
	}
└─ components/
   └─ ProductCard
      ├─ index.ts
      ├─ types.ts
      ├─ view.tsx
      └─ components/
         └─ CoverCarousel/
            └─ ...${fragment ? '' : '\n'}




`;
}

function getProductsStructureAfter2(hook?: boolean): string {
	return `Products/
├─ index.ts
├─ types.ts
├─ view.tsx${
		hook
			? `\n├─ hooks/
│  └─ useProducts.ts`
			: ''
	}
├─ utils/
│  └─ normalizeProduct.ts
├─ gql/
│  ├─ QUERY_PRODUCTS.ts
│  └─ FRAGMENT_PRODUCT.ts
└─ components/
   └─ ProductCard
      ├─ index.ts
      ├─ types.ts
      ├─ view.tsx
      └─ components/
         └─ CoverCarousel/
            └─ ...${hook ? '' : '\n\n '}
`;
}
