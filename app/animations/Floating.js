import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Animation from '../classes/Animation';
// import { calculate, split } from 'utils/text';

export default class Floating extends Animation {
  constructor(element, elements) {
    super({
      element,
      elements,
    });

    // this.timelineIn = GSAP.timeline({
    //   scrollTrigger: {
    //     trigger: '.home__gallery',
    //     start: 'center bottom',
    //     end: 'center top',
    //   },
    // });
  }

  // @todo - implement same animation for subtitle and paragraph

  animateIn() {
    console.log('Entered Viewport');

    // convert HTMLCollection into an array
    // [...this.element.parentNode.children].forEach((el) => {
    //   if (el.classList.contains('anim__floating')) {
    //     GSAP.to(el, {
    //       yPercent: 50,
    //       duration: 1,
    //       ease: 'none',
    //     });
    //   }
    // });
  }

  animateOut() {
    console.log('Left viewport');
  }
}
