import {Sprite} from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Fish from "../components/Fish";

export default class Play extends Scene {
    async onCreated() {

        const footer = new Footer();
        footer.x = -window.innerWidth / 2;
        footer.y = window.innerHeight / 2 - 70;
        this.addChild(footer);

        const fish = new Fish();
        fish.x = -fish.width / 2;
        fish.y = -fish.height / 2;
        this.addChild(fish);

    }

    /**
     * Hook called by the application when the browser window is resized.
     * Use this to re-arrange the game elements according to the window size
     *
     * @param  {Number} width  Window width
     * @param  {Number} height Window height
     */
    onResize(width, height) { // eslint-disable-line no-unused-vars

    }
}
