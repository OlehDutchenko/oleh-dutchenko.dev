import clsx from 'clsx';
import { Gloock as Font } from 'next/font/google';
import React from 'react';
import { PageFooter } from '../../_components/PageFooter';
import { Section } from '../../_components/Section';

const fontForName = Font({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

export const Profile: React.FC = () => {
	return (
		<Section title="Profile">
			<p className={clsx('cv-about-me', fontForName.className)}>
				If you are interested
				<br /> in the concept of&nbsp;&nbsp;&quot;
				<a
					href="https://www.google.com/search?q=clean+code+Robet+martin&newwindow=1&sca_esv=594290971&rlz=1C5CHFA_enUA951UA951&ei=zd-NZcKCIrCRxc8Pq4KR2AY&ved=0ahUKEwiCndmhgbODAxWwSPEDHStBBGsQ4dUDCBA&uact=5&oq=clean+code+Robet+martin&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2NsZWFuIGNvZGUgUm9iZXQgbWFydGluMgcQLhiABBgNMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMgYQABgeGA0yBhAAGBYYHjIGEAAYFhgeMggQABgIGB4YDTILEAAYgAQYigUYhgMyFhAuGIAEGA0YlwUY3AQY3gQY4ATYAQNIx0JQugtYxy9wAXgBkAEAmAFwoAGpCqoBAzYuN7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhhDGIAEGIoFGMgDGLAD2AECwgITEC4YgAQYigUYQxjIAxiwA9gBAsICFhAuGIAEGIoFGEMY1AIYyAMYsAPYAQLCAgoQLhhDGIAEGIoFwgIKEAAYgAQYigUYQ8ICBRAAGIAEwgIFEC4YgATCAg0QLhiABBiKBRhDGNQCwgIZEC4YQxiABBiKBRiXBRjcBBjeBBjgBNgBA8ICFBAuGIAEGJcFGNwEGN4EGOAE2AEDwgIHEC4YDRiABMICFhAuGA0YgAQYlwUY3AQY3gQY4ATYAQPiAwQYACBBiAYBkAYSugYGCAEQARgJugYGCAIQARgIugYGCAMQARgU&sclient=gws-wiz-serp"
					target="_blank"
					rel="noopener noreferrer"
				>
					Clean Code
				</a>
				&quot;,
				<br />I have experience in its
				<br /> practical implementation <br />
				in commercial projects <br />
				on the frontend part.
			</p>

			<br />
			<p>
				<b>Development methodologies:</b>
			</p>
			<ul className="cv-ul cv-ul--2">
				<li>Scrum / Waterfall</li>
				<li>Extreme Programming</li>
			</ul>

			<br />
			<p>
				<b>Development techniques:</b>
			</p>
			<ul className="cv-ul cv-ul--2">
				<li>Testing Driven Development</li>
				<li>Design review & Code review</li>
				<li>Monorepo / Polyrepo</li>
				<li>Git Flow / Trunk Based Development</li>
			</ul>

			<br />
			<p>
				<b>Skills:</b>
			</p>
			<ul className="cv-ul">
				<li>HTML & CSS</li>
				<li>GraphQL</li>
				<li>JavaScript</li>
				<li>React</li>
				<li>TypeScript</li>
				<li>Vitest / Jest</li>
			</ul>
			<PageFooter page={1} height={22} />
		</Section>
	);
};
