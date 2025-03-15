declare module 'react' {
	type CssCustomProperties = Record<`--${string}`, string | undefined>;

	export interface CSSProperties extends CssCustomProperties {}
}

export {};
