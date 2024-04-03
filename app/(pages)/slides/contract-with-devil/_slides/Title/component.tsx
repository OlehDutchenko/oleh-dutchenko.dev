import clsx from 'clsx';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function Title(): ReactElement {
	return (
		<Section bgColor="darker" bgImage="fireWallpaperGif" transition="fade">
			<div className={styles.block}>
				<p className={clsx(styles.subtitle, 'fragment')}>
					Підводні камені генерованого <br />
					TypeScript коду зі схеми GraphQL
				</p>
				<h1 className={styles.title}>«Контракт з Дияволом»</h1>
				<div className={styles.bg} />
			</div>
		</Section>
	);
}
