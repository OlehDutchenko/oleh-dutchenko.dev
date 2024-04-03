const BG_IMAGES = {
	fireWallpaperGif: '/static/slides-contract-with-devil/fire-wallpaper.gif',
};

export type BgImage = keyof typeof BG_IMAGES;

export function getBgImage(image: BgImage | undefined): string | undefined {
	if (image) {
		return BG_IMAGES[image];
	}
}
