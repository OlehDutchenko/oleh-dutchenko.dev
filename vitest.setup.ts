import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

vi.mock('server-only', () => {
	return {};
});

vi.mock('next/font/google', async (): Promise<any> => {
	return {
		JetBrains_Mono: mockedFont('JetBrains_Mono'),
		Orelega_One: mockedFont('Orelega_One'),
		Literata: mockedFont('Literata'),
		Gloock: mockedFont('Gloock'),
	};

	function mockedFont(className: string): () => { className: string } {
		return () => ({ className });
	}
});
