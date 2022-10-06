import GSAP from 'gsap';
import Animation from '../classes/Animation';
// import { calculate, split } from 'utils/text';

export default class NavBg extends Animation {
  constructor(element, elements) {
    super({
      element,
      elements,
    });

    this.navWrapper = '.navigation__wrapper';
  }

  animateIn() {
    if (this.isAnimatedIn) return;

    this.isAnimatedIn = true;

    this.timelineIn = GSAP.timeline({
      onComplete: (_) => {
        this.isAnimatedIn = false;
      },
    });

    GSAP.fromTo(
      '.navigation__wrapper',
      {
        backgroundColor: `rgba(3, 3, 3, 0.2)`,
      },
      {
        backgroundColor: `rgba(3, 3, 3, 0)`,
        duration: 1,
        ease: 'expo.out',
      }
    );
  }

  animateOut() {
    if (this.isAnimatedIn) return;

    // convert HTMLCollection into an array
    GSAP.fromTo(
      '.navigation__wrapper',
      {
        backgroundColor: `rgba(3, 3, 3, 0)`,
      },
      {
        backgroundColor: `rgba(3, 3, 3, 0.2)`,
        duration: 1,
        ease: 'expo.out',
      }
    );
  }
}
