import { describe, expect, it } from 'vitest';
import { HRefMaker } from '../index';

describe('HRefMaker', () => {
	it('should return href for the given path', () => {
		const href = new HRefMaker('uk');
		expect(href.make('/')).toBe('/uk');
		expect(href.make('/about')).toBe('/uk/about');
	});
});
