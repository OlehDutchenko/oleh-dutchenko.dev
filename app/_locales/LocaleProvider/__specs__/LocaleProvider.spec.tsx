import { DEFAULT_LOCALE } from '@/_locales/constants';
import { LocaleProvider, useLocaleContext } from '@/_locales/LocaleProvider';
import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('LocaleProvider', () => {
	it('should share current locale to the children components by hook', () => {
		const { result } = renderHook(() => useLocaleContext(), {
			wrapper: ({ children }) => <LocaleProvider>{children}</LocaleProvider>,
		});
		expect(result.current.locale).toBe(DEFAULT_LOCALE);
	});
});
