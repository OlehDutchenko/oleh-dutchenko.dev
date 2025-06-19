import './page.css';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';

const EXTENDED_VERSION = true;

export default function CVPage() {
	return (
		<main>
			<h1>Oleh Dutchenko</h1>
			<section className="contacts">
				<div>
					<p>
						Email:{' '}
						<a href="mailto:dutchenko.o.cv@gmail.com">
							dutchenko.o.cv@gmail.com
						</a>
					</p>
					<p>
						LinkedIn:{' '}
						<ExternalLink href="https://www.linkedin.com/in/oleh-dutchenko">
							in/oleh-dutchenko
						</ExternalLink>
					</p>
					<p>
						Telegram:{' '}
						<ExternalLink href="https://t.me/b93Rq397ePaweZK">
							Oleh Dutchenko
						</ExternalLink>
					</p>
					<p>
						GitHub:{' '}
						<ExternalLink href="https://github.com/OlehDutchenko">
							OlehDutchenko
						</ExternalLink>
					</p>
				</div>
				<div>
					<p>
						Phone: <a href="tel:+380668231442">+380 66 823 1442</a>
					</p>
					<p>Vinnytsia, Ukraine - Remote</p>
					<p>English: B2 (Upper-Intermediate)</p>
				</div>
			</section>
			<hr />
			<section className="summary">
				<h2>
					Senior Frontend Engineer{' '}
					<span style={{ fontWeight: 400, margin: '0 0.5em' }}>
						/
					</span>{' '}
					Tech Lead
				</h2>
				<p>
					11+ years in frontend engineering. 3 years of Tech Lead
					experience. <br /> Focused on scalable architecture, clean
					code and building strong teams.
				</p>
				<p>
					<b>Key Skills</b>
				</p>
				<ul className="key-skills">
					<li>TypeScript, JavaScript (ES6+), React.js</li>
					<li>GraphQL (certified Apollo Graph Developer)</li>
					<li>
						Scalable Frontend Architecture (Monorepo, Modular
						Design)
					</li>
					<li>
						Clean Code Principles (SOLID, DRY, KISS, Refactoring)
					</li>
					<li>Domain-Driven Design (DDD applied to frontend)</li>
					<li>Component-Driven Development</li>
					<li>CI/CD for Frontend</li>
					<li>Mentoring, Leadership, Onboarding Engineers</li>
				</ul>
			</section>

			<hr />
			<section className="experience">
				<h2>Professional Experience</h2>

				<div className="job">
					<h3>Senior Frontend Engineer / Tech Lead - Wezom</h3>
					<div className="caption">
						<em>March 2020–Present (5+ years)</em>
					</div>
					<div className="mt-1em">Key achievements</div>
					<ul>
						<li>
							Leading frontend team (11 developers across 4
							sub-teams) in large-scale ERP, CRM and Billing
							systems
						</li>
						<li>Driving scalable frontend architecture</li>
						<li>Implementing TDD as core development practice</li>
						<li>
							Conducting design reviews, code reviews, and
							mentoring developers
						</li>
						<li>Managing technical hiring and onboarding</li>
						<li>
							Building internal tools and libraries to support
							company-wide frontend development
						</li>
					</ul>
					<div>Technologies</div>
					<ul>
						<li>TypeScript, JavaScript (ES6+)</li>
						<li>
							React.js, React Hook Form, MUI, Ant Design,
							shadcn-ui, Tailwind CSS, Radix UI
						</li>
						<li>Next.js: Page Router, App Router, SSR, SSG</li>
						<li>Apollo Client, graphql-codegen, introspection</li>
						<li>Vitest, Jest, testing-library</li>
						<li>Date libraries (day.js, date-fns, Moment.js)</li>
						<li>CSS Animations, GSAP, Canvas, SVG</li>
						<li>Storybook, Design Systems</li>
						<li>WebSockets</li>
						<li>VoIP: JsSIP</li>
						<li>Tooling: ESLint, Prettier, Stylelint</li>
						<li className="page-break">
							Node.js (operational tasks)
						</li>
						<li>Bitbucket Pipelines, GitHub Actions</li>
						<li>Turborepo, Lerna</li>
						<li>Docker</li>
						<li>react-redux, redux-saga</li>
						<li>Vue.js (basic knowledge)</li>
					</ul>
					<div>Methodologies and practices</div>
					<ul>
						<li>Agile (Scrum)</li>
						<li>Technical Documentation writing</li>
						<li>
							Gitflow workflow, Trunk-Based Development, Feature
							toggles
						</li>
						<li>TDD, DDD, Design Reviews, Code Reviews</li>
					</ul>
				</div>

				<div className="job">
					<h3>Middle Frontend Engineer - Wezom</h3>
					<div className="caption">
						<em>February 2017–March 2020 (3 years)</em>
					</div>
					<div className="mt-1em">Key achievements</div>
					<ul>
						<li>
							Transitioned from HTML developer to more traditional
							frontend perspectives and technology stack
						</li>
						<li>
							Implemented CI/CD pipelines for frontend delivery
							(GitHub Actions, Bitbucket Pipelines)
						</li>
						<li>
							Started adopting automated unit-testing and
							technical documentation practices
						</li>
					</ul>
					<div>Technologies</div>
					<ul>
						<li>SVG, HTML Canvas</li>
						<li>Pug (Jade), Sass (SCSS), jQuery, Bootstrap</li>
						<li>Grunt, Gulp, Webpack</li>
						<li>CSS Animations, GSAP</li>
						<li>EJS, Laravel Blade, PHP (basic knowledge)</li>
						<li>
							CI/CD: Travis, GitHub Actions, Bitbucket Pipelines
						</li>
						<li>Adobe Photoshop</li>
					</ul>
					<div>Methodologies and practices</div>
					<ul>
						<li>Waterfall, Agile (Scrum)</li>
						<li>Gitflow workflow</li>
						<li>Technical Documentation writing, Code Reviews</li>
						<li>Unit Testing, Automation Testing Initiatives</li>
					</ul>
				</div>

				<div className="job">
					<h3>HTML Developer - Wezom</h3>
					<div className="caption">
						<em>March 2014–February 2017 (3 years)</em>
					</div>
					<div className="mt-1em">Key achievements</div>
					<ul>
						<li>Built more than 20 web projects from scratch</li>
						<li>
							Learned fundamentals of web development, responsive
							design and fundamental tooling
						</li>
						<li>
							Fully switched career path from Motion Design to Web
							Development
						</li>
					</ul>
					<div>Technologies</div>
					<ul>
						<li>HTML, CSS, JavaScript, jQuery</li>
						<li>Adobe Photoshop</li>
						<li>FTP, SFTP</li>
						<li>Version Control: Git</li>
					</ul>
					<div>Methodologies</div>
					<ul>
						<li>
							Responsive Web Design, Cross-browser compatibility
						</li>
						<li>Pixel-perfect UI slicing</li>
						<li>Waterfall methodology</li>
					</ul>
				</div>
			</section>

			<hr className="hide-on-print" />

			<div className="page-break" />

			<section className="projects">
				<h2>Key Projects</h2>

				<div className="project">
					<h3>ERP Platform for Energy Sector (NDA)</h3>
					<p>
						Complex ERP system (HRM, CRM, Billing) for energy
						domain. Monorepo architecture (Turborepo), multi-zone
						structure (Next.js), GraphQL API, TDD, Trunk-Based
						Development.
					</p>
				</div>

				<div className="project">
					<h3>Booking Platform for Resort Chain (NDA)</h3>
					<p>
						Public website with online booking system for a resort
						chain. Implemented smooth page transitions and
						interactive CSS animations for engaging user experience.
						Built with App Router, TypeScript, Docker
					</p>
				</div>

				<div className="project">
					<h3>News Platform & CMS (NDA)</h3>
					<p>
						Integrated CMS with public-facing news portal. Custom
						rich-text editor integration (CKEditor, CKFinder),
						dynamic content management via GraphQL.
					</p>
				</div>

				<div className="project">
					<h3>VoIP CRM System (NDA)</h3>
					<p>
						Web soft-phone integration (JsSIP), browser-based VoIP
						calling, role-based access control.
					</p>
				</div>

				<div className="project">
					<h3>Real Estate Platform (riel.ua)</h3>
					<p>
						Multi-site CMS for 20+ residential complexes.
						Interactive floor plan visualizations, server-side
						rendering (Next.js SSR), SEO-optimized architecture.
					</p>
				</div>
				<div className="project">
					<h3>Internal Frontend Starter Kit (Wezom)</h3>
					<p>
						Internal boilerplate projects evolving over years: from
						Grant/Gulp to Webpack, CRA, Vite and Next (Next.js).
						Served as a standardized starting point for new
						projects, consolidating best practices, scalable
						architecture patterns, and reusable tooling.
						Significantly optimized project setup time.
					</p>
				</div>
			</section>

			<hr />

			<section>
				<h2>Education & Certifications</h2>

				<p>
					<b>Kherson National Technical University (2005–2010)</b> -
					Specialist degree, Graphic and Motion Design.
				</p>

				<h3 style={{ fontSize: 'inherit' }}>Certifications:</h3>
				<ul>
					<li>
						Apollo Graph Developer -{' '}
						<ExternalLink href="https://www.apollographql.com/tutorials/certifications/8ead70f5-3778-4a6c-b223-687fa4ffe239">
							Professional
						</ExternalLink>
					</li>

					<li>
						EF SET English Certificate -{' '}
						<ExternalLink href="https://cert.efset.org/buMxtr">
							C1 (Advanced)
						</ExternalLink>
					</li>

					<li>
						SmallTalk2Me English Speaking Level Test -{' '}
						<ExternalLink href="https://app.smalltalk2.me/cert/e470e743">
							B2 (Upper-Intermediate)
						</ExternalLink>
					</li>
				</ul>
			</section>

			<hr />

			<section>
				<h2>Community Contributions</h2>
				<h3>Open-Source Projects</h3>
				<ul>
					<li>
						<ExternalLink href="https://www.npmjs.com/package/sort-css-media-queries">
							sort-css-media-queries
						</ExternalLink>{' '}
						- algorithm for media query sorting
					</li>
					<li>
						<ExternalLink href="https://www.npmjs.com/package/node-w3c-validator">
							node-w3c-validator
						</ExternalLink>{' '}
						- W3C HTML validator wrapper for CI workflows
					</li>
					<li>
						<ExternalLink href="https://www.npmjs.com/package/gulp-ejs-monster">
							gulp-ejs-monster
						</ExternalLink>{' '}
						- Gulp plugin for EJS with steroids
					</li>
					<li>
						<ExternalLink href="https://github.com/WezomCompany">
							<em>Wezom internal tooling</em>
						</ExternalLink>{' '}
						- Multiple helper libraries developed for internal
						company needs
					</li>
				</ul>

				<h3>Conference Speaker</h3>
				<ul>
					<li>
						JavaScript fwdays'25 - "
						<ExternalLink href="https://fwdays.com/en/event/javascript-fwdays-2025/review/rem-one-unit-to-rule-them-all">
							Rem - one unit to rule them all
						</ExternalLink>
						" [ukr]
					</li>
					<li>
						JavaScript fwdays'24 - "
						<ExternalLink href="https://fwdays.com/en/event/javascript-fwdays-2024/review/pitfalls-of-typescript-generated-code-from-a-graphql-schema">
							Pitfalls of TypeScript-generated code from a GraphQL
							schema
						</ExternalLink>
						" [ukr]
					</li>
				</ul>

				<h3>YouTube Talks</h3>
				<ul>
					<li>
						<ExternalLink href="https://www.youtube.com/watch?v=MSXZpTdoJ5s">
							Public interview discussing Tech Lead career path
						</ExternalLink>{' '}
						[ukr]
					</li>
					<li>
						<ExternalLink href="https://www.youtube.com/watch?v=DNOe80KVurI">
							Live-coding session building JS Download Manager
						</ExternalLink>{' '}
						[ukr]
					</li>
				</ul>
			</section>

			<div className="hide-on-print" style={{ height: 100 }} />
		</main>
	);
}
