import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { Section } from '../../_components/Section';

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
					<div style={{ padding: 10 }}>
						<AccentElement>
							<blockquote>
								<div>
									База даних - це утиліта, що забезпечує
									доступ до даних. <br />
									<RollingFragment maxHeight={100}>
										Із погляду архітектури вона не має
										жодного значення, <br /> це деталь,
										механізм (який може, і буде,
										змінюватись).
										<br />
									</RollingFragment>
									<RollingFragment maxHeight={100}>
										Не дозволяйте низькорівневим механізмам
										просочуватись в архітектуру системи!
									</RollingFragment>
								</div>
							</blockquote>
						</AccentElement>
					</div>
				</Fragment>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>GraphQL - це доступ до даних</h3>
				<RollingFragment>
					це &quot;База Даних&quot; для фронту
				</RollingFragment>
			</Section>
		</>
	);
}
