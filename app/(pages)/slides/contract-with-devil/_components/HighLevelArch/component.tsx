import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './styles.module.css';

export function HighLevelArch(): ReactElement {
	return (
		<div className={styles.root}>
			<div className={clsx(styles.circles)}>
				<Circle number={1}>
					<b>1. Бізнес правила</b> <br />
					<em>Сутності</em>
				</Circle>
				<Circle number={2}>
					<b>2. API</b>
					<br />
					<em>Варіанти використання</em>
					<img
						src="/static/slides-contract-with-devil/graphql-logo.svg"
						alt=""
						aria-hidden
						className={styles.gqlLogo}
					/>
				</Circle>
				<Circle number={3}>
					<b>3. Клієнти</b> <br />
					<em>Зовнішні інтерфейси</em>
				</Circle>
				<div className={styles.gradient} />
			</div>
			<div className={styles.greenArrows}>
				<span>&lArr;</span>
				<span>&lArr;</span>
			</div>
			<div className={styles.redArrows}>
				<span>⇏</span>
				<span>⇏</span>
			</div>
		</div>
	);
}

function Circle({
	children,
	number,
}: {
	children: ReactNode;
	number: number;
}): ReactElement {
	return (
		<>
			<div className={clsx(styles.circle, styles[`circle_${number}`])}>
				<div className={styles.boundary} />
			</div>
			<div className={clsx(styles.text, styles[`text_${number}`])}>
				{children}
			</div>
		</>
	);
}
