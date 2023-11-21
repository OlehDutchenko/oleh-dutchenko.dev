export class HRefMaker {
	constructor(private readonly locale: string) {}

	make(path: string): string {
		path = path.replace(/\/$/, '');
		return `/${this.locale}${path}`;
	}
}
