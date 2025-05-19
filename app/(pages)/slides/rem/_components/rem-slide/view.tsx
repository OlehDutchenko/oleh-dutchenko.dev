import { Section } from '@slides/_components/Section';
import { PropsWithChildren } from 'react';

export function RemSlide({ children }: PropsWithChildren) {
	return <Section>{children}</Section>;
}
