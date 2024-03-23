import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LocaleSwitcher, Props } from './component';

const TEST_ROUTE = 'test-route';
const INITIAL_OPTION = 1;
const SELECTED_OPTION = 0;
const OPTIONS: Props['options'] = [
	{ value: 'en', label: 'English' },
	{ value: 'uk', label: 'Українська' },
];

const { useRouter, mockedRouterPush } = vi.hoisted(() => {
	const mockedRouterPush = vi.fn();
	return {
		useRouter: () => ({ push: mockedRouterPush }),
		mockedRouterPush,
	};
});

vi.mock('next/navigation', () => {
	return {
		useRouter,
		usePathname: () => getOptionMeta(INITIAL_OPTION).url,
		useParams: () => ({ locale: getOptionMeta(INITIAL_OPTION).value }),
	};
});

describe('LocaleSwitcher', () => {
	let options: Props['options'];
	beforeEach(() => {
		options = OPTIONS.slice();
	});

	it('should render <select> element with options and `title` attr', () => {
		const description = 'Description';
		render(<LocaleSwitcher description={description} options={options} />);
		const select = screen.queryByRole('combobox');
		expect(select).toBeInstanceOf(HTMLElement);
		expect(select?.title).toBe(description);
		expect(select?.children.length).toBe(2);
	});

	it('should programmatically redirect after selecting locale', () => {
		render(<LocaleSwitcher description="Description" options={options} />);
		const select = screen.getByRole('combobox');
		const { value, url } = getOptionMeta(SELECTED_OPTION);
		fireEvent.change(select, { target: { value } });
		expect(mockedRouterPush).toHaveBeenCalledWith(url);
	});
});

function getOptionMeta(optionIndex: number): { value: string; url: string } {
	const value = OPTIONS[optionIndex].value;
	const url = getTestPathname(value);
	return { value, url };
}

function getTestPathname(locale: string): string {
	return `/${locale}/${TEST_ROUTE}`;
}
