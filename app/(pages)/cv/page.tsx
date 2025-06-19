import './page.css';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';

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
					<li>React.js / Next.js (App Router, SSR, SSG)</li>
					<li>TypeScript / JavaScript (ES6+)</li>
					<li>
						GraphQL (Apollo Client & Server, Schema Design,
						graphql-codegen)
					</li>
					<li>
						Scalable Frontend Architecture (Monorepo, Turborepo,
						Modular Design)
					</li>
					<li>TDD (Vitest, Jest, Testing Library)</li>
					<li>Design Reviews, Code Reviews, Refactoring</li>
					<li>Clean Code Principles (SOLID, DRY, KISS)</li>
					<li>Domain-Driven Design (DDD applied to frontend)</li>
					<li>
						Component-Driven Development (Storybook, Design Systems)
					</li>
					<li>Git Flow, GitHub Flow, Trunk-Based Development</li>
					<li>
						CI/CD for Frontend (Bitbucket Pipelines, GitHub Actions)
					</li>
					<li>Mentoring, Team Leadership, Onboarding Engineers</li>
				</ul>
			</section>
			<section className="experience">
				<h2>Professional Experience</h2>

				<div className="job">
					<h3>Wezom - Senior Frontend Engineer / Tech Lead</h3>
					<div>
						<em>March 2020–Present (5+ years)</em>
					</div>
					<ul>
						<li>
							Leading frontend team (11 developers across 4
							sub-teams) in large-scale ERP, CRM and Billing
							systems
						</li>
						<li>
							Driving scalable frontend architecture (monorepo,
							multi-zone, modular design with Turborepo and
							Next.js)
						</li>
						<li>
							Implementing TDD as core development practice
							(Vitest, Testing Library)
						</li>
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
				</div>

				<div className="job">
					<h3>Wezom - Middle Frontend Engineer</h3>
					<div>
						<em>February 2017–March 2020 (3 years)</em>
					</div>
					<ul>
						<li>
							Transitioned from traditional frontend stack
							(jQuery, Laravel Blade, EJS) to React and
							GraphQL-based applications
						</li>
						<li>
							Implemented CI/CD pipelines for frontend delivery
							(GitHub Actions, Bitbucket Pipelines)
						</li>
						<li>
							Started adopting automated testing and technical
							documentation practices
						</li>
					</ul>
				</div>

				<div className="job">
					<h3>Wezom - HTML Developer</h3>
					<div>
						<em>March 2014–February 2017 (3 years)</em>
					</div>
					<ul>
						<li>
							Built more than 20 web projects from scratch (HTML,
							CSS, Sass, jQuery, Pug, Gulp, Webpack)
						</li>
						<li>
							Learned fundamentals of web development, responsive
							design and frontend tooling
						</li>
						<li>
							Fully switched career path from Motion Design to Web
							Development
						</li>
					</ul>
				</div>
			</section>

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
