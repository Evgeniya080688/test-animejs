import { defineConfig } from "vite";
import { resolve } from 'path'
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const FRONT_PATH = 'src';

export default defineConfig({
    root: 'src',
    base: "/test-animejs/",
    build: {
        minify: true,
        cssMinify: true,
        rolldownOptions: {
            input: {
                index: resolve(__dirname, `${FRONT_PATH}/index.html`),
            }
        }
    }
});