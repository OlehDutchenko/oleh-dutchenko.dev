import React, {
	PropsWithChildren,
	ReactElement,
	useEffect,
	useRef,
} from 'react';
import RevealJS from 'reveal.js';

export interface Props
	extends PropsWithChildren,
		Partial<Pick<RevealJS.Options, 'transition' | 'transitionSpeed'>> {}

export function Reveal({
	children,
	transition = 'slide',
	transitionSpeed = 'default',
}: Props): ReactElement {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<RevealJS.Api | null>(null);

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return;

		if (deckDivRef.current) {
			const reveal = new RevealJS(deckDivRef.current, {
				transition,
				transitionSpeed,
			});

			reveal.on('slidechanged', (event) => {
				slideChange(event, true);
			});

			reveal.on('slidetransitionend', (event) => {
				slideChange(event, false);
			});

			deckRef.current = reveal;
		}

		if (deckRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			deckRef.current
				.initialize()
				.then(() => {
					// good place for event handlers and plugin setups
				})
				.finally(() => {
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
	}, [transition, transitionSpeed]);

	return (
		<div className="reveal" ref={deckDivRef}>
			<div className="slides">{children}</div>
		</div>
	);
}

function slideChange(event: Record<string, any>, changing: boolean): void {
	if (isRevealEvent(event)) {
		set(event.currentSlide);
		set(event.previousSlide);
	}

	function set(el: HTMLElement): void {
		el.setAttribute('data-slide-changing', String(changing));
	}
}

function isRevealEvent(event: Record<string, any>): event is RevealEvent {
	return (
		event.currentSlide instanceof HTMLElement &&
		event.previousSlide instanceof HTMLElement
	);
}

interface RevealEvent extends Event {
	currentSlide: HTMLElement;
	previousSlide: HTMLElement;
}
