import { AccentElement } from '@/_components/AccentElement';
import { RevealSlides } from '@/_components/RevealSlides';
import { Root } from '@/_components/Root';
import { ReactElement } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/serif.css';
import 'reveal.js/plugin/highlight/zenburn.css';
import '../overrides.css';

export default function Page(): ReactElement {
	return (
		<Root>
			<RevealSlides hash hashOneBasedIndex>
				<section data-background-color="maroon">
					<div className="hero-block">
						<h1 className="hero-title">Hero title</h1>
						<p className="hero-subtitle">
							Hero subtitle <br />
							with line break
						</p>
					</div>
				</section>
				<section data-background-color="darkred">
					<h2>Heading 2</h2>
					<p>Dark background color</p>
				</section>
				<section>
					<h2>Heading 2</h2>
					<p>Light background color (default)</p>
				</section>
				<section>
					<h3>Heading 3</h3>
					<p>Light background color (default)</p>
				</section>
				<section>
					<h4>Heading 4</h4>
					<p>Light background color (default)</p>
				</section>
				<section>
					<h3>Code block</h3>
					<AccentElement bold>
						<pre>
							<code data-trim className="language-typescript">
								{"import { ... } from 'Dictionaries/GQL';"}
							</code>
						</pre>
					</AccentElement>
				</section>
				<section>
					<h3>Ordered list</h3>
					<ol>
						<li>First item</li>
						<li>Second item with long text</li>
						<li>Third item</li>
						<li>Fourth item</li>
						<li>Fifth item</li>
					</ol>
				</section>
				<section>
					<h3>Unordered list</h3>
					<ul>
						<li>First item</li>
						<li>Second item with long text</li>
						<li>Third item</li>
					</ul>
				</section>
				<section>
					<h3>Blockquote</h3>
					<AccentElement>
						<blockquote>
							<p>
								Lorem ipsum dolor sit amet, consectetur <br />
								adipisicing elit. Adipisci amet animi error ex
							</p>
							<footer>Author</footer>
						</blockquote>
					</AccentElement>
				</section>
			</RevealSlides>
		</Root>
	);
}
