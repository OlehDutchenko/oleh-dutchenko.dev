import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { ImageWrapper } from '../../_components/ImageWrapper';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';
import { SlashBlock } from '../../_components/SlashBlock';
import styles from './styles.module.css';

export function FigureProductivityRelease(): ReactElement {
	return (
		<>
			<Section bgColor="light" className="flex-section">
				<ImageWrapper>
					<img
						src="/static/slides-contract-with-devil/figure-productivity-release.png"
						alt=""
					/>
					<Fragment className={styles.whiteFragment} fx="fade-out" />
				</ImageWrapper>
				<RollingFragment
					maxHeight={240}
					className={styles.rollingFragment}
				>
					<SlashBlock left={<Left />} right={<Right />} />
				</RollingFragment>
			</Section>
			<Section bgColor="light">
				<p>
					Давайте по черзі,
					<br />
					як я то зробив...
				</p>
			</Section>
		</>
	);
}

function Left(): ReactElement {
	return (
		<small>
			<small>Я, три роки назад, гортаючи ЧА думав:</small>
			<br />- Та ну, не можна так вшатать свій проєкт...
		</small>
	);
}

function Right(): ReactElement {
	return (
		<small>
			<small>Як би ж я знав, що в майбутньому</small> <br />
			Сам стану тим розробником який <br />
			призведе систему до подібної ситуації
		</small>
	);
}
