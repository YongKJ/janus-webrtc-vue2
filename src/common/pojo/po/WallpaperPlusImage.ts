
export class WallpaperPlusImage {

    private static readonly _BACKGROUND = require("@/assets/img/nap.jpg");
    private static readonly _BACKGROUND_TWO = require("@/assets/img/8c37e09bfddb09a5934a8374c404bf822d07b39a.png");
    private static readonly _BACKGROUND_THREE = require("@/assets/img/IMG_202307191_202905449.jpeg");
    private static readonly _BACKGROUND_FOUR = require("@/assets/img/IMG_202307191_202915593.jpeg");

    static get BACKGROUND_THREE(): any {
        return this._BACKGROUND_THREE;
    }

    static get BACKGROUND_FOUR(): any {
        return this._BACKGROUND_FOUR;
    }

    static get BACKGROUND_TWO(): any {
        return this._BACKGROUND_TWO;
    }

    static get BACKGROUND(): any {
        return this._BACKGROUND;
    }
}