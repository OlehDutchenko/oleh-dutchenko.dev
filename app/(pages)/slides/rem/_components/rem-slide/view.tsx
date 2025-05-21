import { Section } from '@slides/_components/Section';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Section>;

export function RemSlide(props: Props) {
	return <Section {...props} />;
}
