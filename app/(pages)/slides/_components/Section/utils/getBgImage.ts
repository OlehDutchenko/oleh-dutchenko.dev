const BG_IMAGES = {
	fireWallpaperGif: '/static/slides-contract-with-devil/fire-wallpaper.gif',
	wavesOfDarkWaterGif:
		'/static/slides-rem/waves-of-dark-water-free-video.gif',
};

export type BgImage = keyof typeof BG_IMAGES;

export function getBgImage(image: BgImage | undefined): string | undefined {
	if (image) {
		return BG_IMAGES[image];
	}
}
