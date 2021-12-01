import {Texture, Sprite} from 'pixi.js-legacy';

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
        }
    }

    center() {
        this.x = -this.width / 2;
        this.y = -this.height / 2;
    }

    expand() {
        this.texture = this.TEXTURE_BIG;
        this.scale.set(1.5, 1.5);
        this.center();
        setTimeout(() => this.contract(), 1500);
    }

    contract() {
        this.texture = this.TEXTURE_SMALL;
        this.scale.set(1, 1);
        this.center();
    }
}
