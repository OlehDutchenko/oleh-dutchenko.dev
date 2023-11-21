import { LocaleName } from '@/_locales/constants';

export class TranslationDictionary<T> {
	constructor(private readonly dictionary: Dictionary<T>) {}

	async read(locale: LocaleName): Promise<T> {
		return this.dictionary[locale]();
	}
}

type Dictionary<T> = Record<LocaleName, () => Promise<T>>;
export type { Dictionary, LocaleName };
