import {Texture, Sprite} from 'pixi.js';

export default class Fish extends Sprite {

    constructor() {
        super();

        this.name = 'fish';
        this.width = 931;
        this.height = 533;

        this.TEXTURE_SMALL = Texture.from('small');
        this.TEXTURE_BIG = Texture.from('big');

        this.texture = this.TEXTURE_SMALL;

        this.interactive = true;
        this.buttonMode = true;

        this.on('pointerdown', this._toggleSize);
    }

    _toggleSize() {
        if (this.texture === this.TEXTURE_SMALL) {
            this.expand();
        } else {
            this.contract();
        }
    }

    expand() {
        this.texture = this.TEXTURE_BIG;
    }

    contract() {
        this.texture = this.TEXTURE_SMALL;
    }
}
