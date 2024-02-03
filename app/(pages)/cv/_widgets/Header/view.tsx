import React from 'react';
import { PageCaption } from '../../_components/PageCaption';

export const Header: React.FC = () => {
	return (
		<header className="cv-box">
			<PageCaption mainPage />
			<h1 className="cv-heading">Oleh Dutchenko</h1>
			<p className="cv-about-me">
				If you are interested in the concept of&nbsp;&nbsp;&quot;
				<a
					href="https://www.google.com/search?q=clean+code+Robet+martin&newwindow=1&sca_esv=594290971&rlz=1C5CHFA_enUA951UA951&ei=zd-NZcKCIrCRxc8Pq4KR2AY&ved=0ahUKEwiCndmhgbODAxWwSPEDHStBBGsQ4dUDCBA&uact=5&oq=clean+code+Robet+martin&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2NsZWFuIGNvZGUgUm9iZXQgbWFydGluMgcQLhiABBgNMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMgcQABiABBgNMgYQABgeGA0yBhAAGBYYHjIGEAAYFhgeMggQABgIGB4YDTILEAAYgAQYigUYhgMyFhAuGIAEGA0YlwUY3AQY3gQY4ATYAQNIx0JQugtYxy9wAXgBkAEAmAFwoAGpCqoBAzYuN7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhhDGIAEGIoFGMgDGLAD2AECwgITEC4YgAQYigUYQxjIAxiwA9gBAsICFhAuGIAEGIoFGEMY1AIYyAMYsAPYAQLCAgoQLhhDGIAEGIoFwgIKEAAYgAQYigUYQ8ICBRAAGIAEwgIFEC4YgATCAg0QLhiABBiKBRhDGNQCwgIZEC4YQxiABBiKBRiXBRjcBBjeBBjgBNgBA8ICFBAuGIAEGJcFGNwEGN4EGOAE2AEDwgIHEC4YDRiABMICFhAuGA0YgAQYlwUY3AQY3gQY4ATYAQPiAwQYACBBiAYBkAYSugYGCAEQARgJugYGCAIQARgIugYGCAMQARgU&sclient=gws-wiz-serp"
					target="_blank"
					rel="noopener noreferrer"
				>
					Clean Code
				</a>
				&quot;,
				<br />I have experience in its practical implementation <br />
				in commercial projects on the frontend part.
			</p>
		</header>
	);
};
