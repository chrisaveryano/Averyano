import GSAP from 'gsap';
import Animation from '../classes/Animation';
// import { calculate, split } from 'utils/text';

export default class FadeIn extends Animation {
  constructor(element, elements) {
    super({
      element,
      elements,
    });
  }

  animateIn() {
    if (this.isAnimatedIn) return;

    this.isAnimatedIn = true;

    this.timelineIn = GSAP.timeline({
      onComplete: (_) => {
        this.isAnimatedIn = false;
      },
    });

    // convert HTMLCollection into an array
    [...this.element.parentNode.children].forEach((el) => {
      if (el.classList.contains('anim__fade')) {
        GSAP.fromTo(
          el,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1.5,
            ease: 'expo.out',
          }
        );
      }
    });
  }

  animateOut() {
    if (this.isAnimatedIn) return;

    // convert HTMLCollection into an array
    [...this.element.parentNode.children].forEach((el) => {
      if (el.classList.contains('anim__fade')) {
        GSAP.fromTo(
          el,
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
          }
        );
      }
    });
  }
}
