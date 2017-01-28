
const PLAYER_IMAGES = require('./player_images.json').images.split(', ');
const PLAYER_COLORS = require('./player_colors.json').colors;
export class PlayerUtil {
    public static getUnusedPlayerImage(usedImages: Array<string>): string {
        let filteredImages = PLAYER_IMAGES.filter((image) => usedImages.indexOf(image) === -1 )
        return filteredImages[Math.floor(Math.random() * filteredImages.length)];
    }

    public static getUnusedPlayerColor(usedColors: Array<string>): string {
        let filteredColors = PLAYER_COLORS.filter((color) => usedColors.indexOf(color) === -1 )
        return filteredColors[Math.floor(Math.random() * filteredColors.length)];
    }
}