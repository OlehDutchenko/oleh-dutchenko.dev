const BG_COLORS = {
	darker: 'black',
	dark: '#1b2c4f',
	light: '#f0f1eb',
	lighter: 'white',
};

export type BgColor = keyof typeof BG_COLORS;

export function getBgColor(color: BgColor | undefined): string | undefined {
	if (color) {
		return BG_COLORS[color];
	}
}
