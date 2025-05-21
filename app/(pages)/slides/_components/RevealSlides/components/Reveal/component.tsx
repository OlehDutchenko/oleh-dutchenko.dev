import clsx from 'clsx';
import { PropsWithChildren, useEffect, useRef } from 'react';
import RevealJS from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';

export interface Props
	extends PropsWithChildren,
		Partial<
			Pick<
				RevealJS.Options,
				'transition' | 'transitionSpeed' | 'hash' | 'hashOneBasedIndex'
			>
		> {}

const RECORD_MODE = process.env.NEXT_PUBLIC_SLIDES_RECORD_MODE === 'true';

export async function Reveal({
	children,
	transition = 'slide',
	transitionSpeed = 'default',
	hash,
	hashOneBasedIndex,
}: Props) {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<RevealJS.Api | null>(null);

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return;

		if (deckDivRef.current) {
			const reveal = new RevealJS(deckDivRef.current, {
				transition,
				transitionSpeed,
				hash,
				hashOneBasedIndex,
				plugins: [RevealHighlight],
			});

			reveal.on('fragmentshown', fragmentShown);
			reveal.on('fragmenthidden', fragmentHidden);

			deckRef.current = reveal;
		}

		if (deckRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			deckRef.current.initialize().finally(() => {
				console.log('Reveal.js initialized.');
			});
		}

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy();
					deckRef.current = null;
				}
			} catch (e) {
				console.warn('Reveal.js destroy call failed.');
				console.log(e);
			}
		};
	}, [hash, hashOneBasedIndex, transition, transitionSpeed]);

	const className = clsx('reveal', RECORD_MODE && 'reveal-video-placeholder');

	return (
		<div className={className} ref={deckDivRef}>
			<div className="slides">{children}</div>
		</div>
	);
}

function fragmentShown(event: FragmentEvent): void {
	const { section, className } = getSectionMeta(event.fragment);
	if (section && className) {
		section.classList.add(className);
	}
}

function fragmentHidden(event: FragmentEvent): void {
	const { section, className } = getSectionMeta(event.fragment);
	if (section && className) {
		section.classList.remove(className);
	}
}

function getSectionMeta(fragment?: HTMLElement): {
	section: HTMLElement | null;
	className: string | undefined;
} {
	let section = null;
	let className;
	if (fragment) {
		section = fragment.closest('section');
		className = fragment.dataset.sectionClassName;
	}
	return { section, className };
}

interface FragmentEvent extends Event {
	fragment?: HTMLElement;
}
