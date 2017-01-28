
const PLAYER_IMAGES = require('./profile_images.json').images.split(', ');

export class PlayerUtil {
    public static getUnusedProfileImage(usedImages: Array<string>): string {
        let filteredImages = PLAYER_IMAGES.filter((image) => usedImages.indexOf(image) === -1 )
        return filteredImages[Math.floor(Math.random() * filteredImages.length)];
    }
}