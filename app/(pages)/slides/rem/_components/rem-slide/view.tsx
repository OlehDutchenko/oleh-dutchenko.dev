import { Section } from '@slides/_components/Section';
import clsx from 'clsx';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Section> & {
	variant?: 'fade-in-nth-child';
};

export function RemSlide({ variant, ...props }: Props) {
	return <Section {...props} className={clsx(props.className, variant)} />;
}
