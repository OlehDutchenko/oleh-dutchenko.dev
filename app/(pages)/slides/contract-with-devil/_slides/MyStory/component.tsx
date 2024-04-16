import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import styles from '@/(pages)/slides/contract-with-devil/_slides/DepsRuleIntro/styles.module.css';
import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function MyStory(): ReactElement {
	return (
		<>
			<Section bgColor="light" transition="zoom-in fade-out">
				<h3>
					Проте у &quot;правила залежностей&quot; <br />є і друга
					сторона медалі
				</h3>
			</Section>
			<Section
				bgColor="accent"
				className={styles.sectionAttention}
				transition="zoom-in slide-out"
			>
				<AccentElement>
					<blockquote style={{ background: 'none' }}>
						<p>
							<em>
								Кожне зовнішнє “коло” <br />
								залежить від його внутрішнього “сусіда”
							</em>
						</p>
					</blockquote>
				</AccentElement>
				<RollingFragment component="p" maxHeight={150}>
					<br />
					<small>
						Саме на цю проблематику хочу звернути вашу увагу!{' '}
					</small>
					<br />
					<b>Залежність UI від АПІ</b>
				</RollingFragment>
			</Section>
			<Section bgColor="darker" transition="zoom-in zoom-out">
				<h3>Моя історія</h3>
				<hr style={{ width: '10%' }} />
				<p>
					Про захоплення технологією, <br />
					про зневіру в обраному шляху <br />
					та &quot;просвітлення&quot; 😎
				</p>
			</Section>
		</>
	);
}
