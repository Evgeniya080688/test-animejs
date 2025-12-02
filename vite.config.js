import { defineConfig } from "vite";
import { resolve } from 'path'
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const FRONT_PATH = '/';

export default defineConfig({
    base: "/test-animejs/",
    root: 'src',
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