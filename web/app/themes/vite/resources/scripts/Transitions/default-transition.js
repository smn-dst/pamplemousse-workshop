import { gsap } from 'gsap';

import AbstractTransition from './abstract-transition.js';

export default class DefaultTransition extends AbstractTransition {
  goIn({ from, to, trigger }) {
    return new Promise((resolve) => {
      window.scrollTo(0, 0);

      from.remove();

      gsap.fromTo(
        to,
        { alpha: 0 },
        {
          duration: 0.5,
          alpha: 1,
          onComplete: resolve,
        }
      );
    });
  }

  goOut({ from, trigger }) {
    return new Promise((resolve) => {
      gsap.to(from, {
        duration: 0.5,
        alpha: 0,
        onComplete: resolve,
      });
    });
  }
}
