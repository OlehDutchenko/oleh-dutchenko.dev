import { describe, expect, it } from 'vitest';
import { HRefMaker } from '../index';

describe('HRefMaker', () => {
	it('should return href for the given path', () => {
		const homepage = new HRefMaker('uk').make('/');
		expect(homepage).toBe('/uk');

		const about = new HRefMaker('uk').make('/about');
		expect(about).toBe('/uk/about');
	});
});
