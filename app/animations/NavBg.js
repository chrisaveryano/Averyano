import GSAP from 'gsap';
import Animation from '../classes/Animation';
import each from 'lodash/each';
// import { calculate, split } from 'utils/text';

export default class NavBg extends Animation {
  constructor(element, elements) {
    super({
      element,
      elements,
    });
    this.firstLoad = true;
    this.navList = document.querySelector('.navigation__list');
    this.navWrapper = document.querySelector('.navigation__wrapper');
  }

  toggleActiveMenu(target) {
    each(this.navList.children, (child) => {
      child.classList.remove('active');
    });

    if (target.classList.contains('home__hero'))
      this.navList.children[0].classList.add('active');
    if (target.classList.contains('home__services'))
      this.navList.children[1].classList.add('active');
    if (target.classList.contains('home__gallery'))
      this.navList.children[2].classList.add('active');
    if (target.classList.contains('home__contact'))
      this.navList.children[3].classList.add('active');
  }

  animateIn(target) {
    if (this.isAnimatedIn) return;

    // Update Menu code:
    if (target) {
      this.toggleActiveMenu(target);
    }
    //
    this.isAnimatedIn = true;

    this.timelineIn = GSAP.timeline({
      onComplete: (_) => {
        this.isAnimatedIn = false;
      },
    });

    // GSAP.fromTo(
    //   '.navigation__wrapper',
    //   {
    //     // y: '0%',
    //     backgroundColor: `rgba(3, 3, 3, 0.2)`,
    //   },
    //   {
    //     // y: '-100%',
    //     backgroundColor: `rgba(3, 3, 3, 0)`,
    //     duration: 1,
    //     ease: 'expo.out',
    //   }
    // );
  }

  animateOut(target) {
    if (this.isAnimatedIn) return;

    // if (target) {
    //   this.toggleActiveMenu(target);
    // }
    // GSAP.fromTo(
    //   '.navigation__wrapper',
    //   {
    //     // y: '-100%',
    //     backgroundColor: `rgba(3, 3, 3, 0)`,
    //   },
    //   {
    //     // y: '0%',
    //     backgroundColor: `rgba(3, 3, 3, 0.2)`,
    //     duration: 1,
    //     ease: 'expo.out',
    //   }
    // );
  }
}
