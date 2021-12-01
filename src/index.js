import Application from './core/Application';
import * as PIXI from 'pixi.js-legacy';

// required for pixi dev tools to work
window.PIXI = PIXI;


document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();

    // Used for automated testing only
    window.__PIXI_APP = app;
});
