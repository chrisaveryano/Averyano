import GSAP from 'gsap';
import Animation from '../classes/Animation';
// import { calculate, split } from 'utils/text';

export default class Paragraph extends Animation {
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
      if (el.classList.contains('anim__paragraph')) {
        GSAP.fromTo(
          el,
          {
            autoAlpha: 0,
            y: '100%',
          },
          {
            autoAlpha: 1,
            duration: 1.5,
            ease: 'expo.out',
            stagger: {
              amount: 0.5,
              axis: 'x',
            },
            y: '0%',
          }
        );
      }

      if (el.classList.contains('anim__paragraph--left')) {
        GSAP.fromTo(
          el,
          {
            autoAlpha: 0,
            x: '-100%',
          },
          {
            autoAlpha: 1,
            duration: 1.5,
            ease: 'expo.out',
            stagger: {
              amount: 0.5,
              axis: 'y',
            },
            x: '0%',
          }
        );
      }
    });
  }

  animateOut() {
    if (this.isAnimatedIn) return;

    // convert HTMLCollection into an array
    [...this.element.parentNode.children].forEach((el) => {
      if (el.classList.contains('home__hero__description')) {
        GSAP.fromTo(
          el,
          {
            autoAlpha: 1,
            y: '100%',
          },
          {
            autoAlpha: 0,
            duration: 0,
            ease: 'expo.out',
            y: '0%',
          }
        );
      }
    });
  }
}
