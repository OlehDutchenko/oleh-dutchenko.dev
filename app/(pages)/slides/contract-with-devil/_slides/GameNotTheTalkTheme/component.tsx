import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function GameNotTheTalkTheme(): ReactElement {
	return (
		<Section bgColor="accent" className={styles.section}>
			<p>
				А ще у грі багато різних <br />
				демонів, дияволів, бісинів та купа всього цікавого)
			</p>
			<RollingFragment component="div">
				Проте, доповідь, все ж таки, не про гру…
			</RollingFragment>
		</Section>
	);
}
