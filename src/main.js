import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'

import { waapi, splitText, createTimer,  animate, svg, stagger} from 'animejs';

const { chars } = splitText('h2', { words: false, chars: true });

waapi.animate(chars, {
  translate: `0 -2rem`,
  delay: stagger(100),
  duration: 600,
  loop: true,
  alternate: true,
  ease: 'inOut(2)',
});
   
// const [ $time, $count ] = utils.$('.value');

// createTimer({
//   duration: 1000,
//   loop: true,
//   frameRate: 30,
//   onUpdate: self => $time.innerHTML = self.currentTime,
//   onLoop: self => $count.innerHTML = self._currentIteration
// });


animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
