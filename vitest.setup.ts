import { vi } from 'vitest';

vi.mock('next/font/google', async (): Promise<any> => {
	return {
		JetBrains_Mono: mockedFont('JetBrains_Mono'),
		Orelega_One: mockedFont('Orelega_One'),
		Literata: mockedFont('Literata'),
	};

	function mockedFont(className: string): () => { className: string } {
		return () => ({ className });
	}
});
