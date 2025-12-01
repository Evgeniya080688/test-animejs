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