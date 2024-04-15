import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function GameAnalogy(): ReactElement {
	return (
		<Section bgColor="darker" className={styles.section}>
			<blockquote style={{ background: 'none' }}>
				<p>
					Якщо провести аналогію між грою та процесом розробки, ми
					зможемо побачити подібний звʼязок:
				</p>
				<RollingFragment component="div" maxHeight={200}>
					Рішення які приймаються розробниками кожного дня, <br /> та
					навіть тривіальні дії, можуть кардинально вплинути на
					подальшу долю кодової бази проекту!
				</RollingFragment>
			</blockquote>
		</Section>
	);
}
