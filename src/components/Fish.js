import * as PIXI from 'pixi.js-legacy';

export default class Fish extends PIXI.Sprite {

    constructor() {
        super();

        this.name = 'fish';
        this.width = 931;
        this.height = 533;

        this.texture = PIXI.Texture.from('small');

        this.interactive = true;
        this.buttonMode = true;

        this.on('pointerdown', this._toggleSize);
    }

    _toggleSize() {
        if (this.texture === PIXI.Texture.from('small')) {
            this.expand();
        }
    }

    center() {
        this.x = -this.width / 2;
        this.y = -this.height / 2;
    }

    expand() {
        this.texture = PIXI.Texture.from('big');
        this.scale.x = 1.5;
        this.scale.y = 1.5;
        this.center();
        setTimeout(() => this.contract(), 1500);
    }

    contract() {
        this.texture = PIXI.Texture.from('small');
        this.scale.x = 1;
        this.scale.y = 1;
        this.center();
    }
}
