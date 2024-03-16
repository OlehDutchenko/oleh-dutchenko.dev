'use client';

import React, {
	Fragment,
	PropsWithChildren,
	ReactElement,
	useEffect,
	useRef,
} from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';

interface Props extends PropsWithChildren {}

export function RevealSlides(props: Props): ReactElement {
	const [isMounted, setIsMounted] = React.useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (isMounted) return <CSRSlides {...props} />;
	return <Fragment />;
}

function CSRSlides({ children }: Props): ReactElement {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<Reveal.Api | null>(null);

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return;

		if (deckDivRef.current) {
			deckRef.current = new Reveal(deckDivRef.current, {
				transition: 'slide',
			});
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
	}, []);

	return (
		<div className="reveal" ref={deckDivRef}>
			<div className="slides">{children}</div>
		</div>
	);
}
