import { PropsWithChildren, ReactElement } from 'react';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';

export function GraphQL101(): ReactElement {
	return (
		<>
			<Section bgColor="light" className="flex-section">
				<h3>
					Як в &quot;інтернеті&quot; нам рекомендують працювати з
					GraphQL та TypeScript <br /> на стороні фронтенду?
				</h3>
				<ul>
					<RollingFragment component="li" fx="fade-up">
						Виконайте інтроспекцію GraphQL
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						Опишіть бажану операцію
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						Згенеруйте з неї TypeScript код
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						Юзайте його в своєму віджеті
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						Будьте щасливі!{' '}
						<em className="fragment" style={{ color: 'tomato' }}>
							Ta ta, for now!
						</em>
					</RollingFragment>
				</ul>
			</Section>
			<Section bgColor="light">
				<h3>І це дійсно працює!</h3>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>Є класні бібліотеки, які допомагають зробити це швидко</h3>
				<ul>
					<RollingFragment component="li" fx="fade-up">
						<LibLink href="https://www.npmjs.com/package/apollo-codegen">
							apollo-codegen
						</LibLink>
						&nbsp;
						<em>deprecated</em>&nbsp;
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						<LibLink href="https://the-guild.dev/graphql/codegen">
							@graphql-codegen/cli
						</LibLink>
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						<LibLink href="https://gql-tada.0no.co/">
							gql.tada
						</LibLink>
					</RollingFragment>
				</ul>
			</Section>
		</>
	);
}

interface LibLinkProps extends PropsWithChildren {
	href: string;
}

function LibLink({ href, children }: LibLinkProps): ReactElement {
	return (
		<a target="_blank" rel="noopener noreferrer" href={href}>
			<code>{children}</code>
		</a>
	);
}
