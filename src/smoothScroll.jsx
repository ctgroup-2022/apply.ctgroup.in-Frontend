import { preloadFonts } from './proloadFonts';
import { Item } from './Item';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

let lenis;

const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  lenis.on('scroll', () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
};

export const initialize = () => {
  preloadFonts('qsy7khk').then(() => {
    document.body.classList.remove('loading');
    initSmoothScrolling();
    [...document.querySelectorAll('.content-wrap')].forEach((element) => {
      new Item(element);
    });
  });
};