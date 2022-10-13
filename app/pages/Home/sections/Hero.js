import GSAP from 'gsap';

import each from 'lodash/each';
import { ColorsManager } from 'classes/Colors';

export default class Hero {
  constructor() {
    this.wrapper = document.querySelector('.home__hero__wrapper');
    this.heroArrow = document.querySelector('.home__hero__left__hide');
    this.arrowIcon = document.querySelector('.home__hero__hide__arrow');
    this.switchBtn = document.querySelector('.hero__switch__container');
    this.wrapperWidth = this.wrapper.getBoundingClientRect().width;
    this.arrowWidth = this.heroArrow.getBoundingClientRect().width;
    this.isVisible = true;
    this.timeline = GSAP.timeline(
      this.wrapper,
      { x: '-100%' },
      { x: '0%', duration: 1 },
      1
    );
    this.addEventListeners();
  }
  create() {}

  show() {
    // if coming from resize, change instantly
    if (this.isVisible) {
      GSAP.set(this.wrapper, {
        x: `${this.wrapperWidth - this.wrapperWidth}px`,
      });

      return;
    }

    // Animation
    GSAP.fromTo(
      this.wrapper,
      { x: `${0 - this.wrapperWidth + this.arrowWidth}px` },
      { x: `${0}px`, duration: 0.7 }
    );
    GSAP.fromTo(
      this.arrowIcon,
      { rotate: '180deg' },
      { rotate: '0deg', duration: 0.3 }
    );

    GSAP.fromTo(
      this.switchBtn,
      {
        rotate: '90deg',
        x: `${0 + this.wrapperWidth - this.arrowWidth * 1.58}`,
      },
      {
        rotate: '0deg',
        x: `${0}px`,
        duration: 0.7,
      }
    );
    this.isVisible = true;
  }
  hide() {
    // if coming from resize, change instantly
    if (!this.isVisible) {
      GSAP.set(this.wrapper, {
        x: `${0 - this.wrapperWidth + this.arrowWidth}px`,
      });
      GSAP.set(this.switchBtn, {
        x: `${this.wrapperWidth - convertRemToPixels(3) - this.arrowWidth - 4}`,
      });
      return;
    }

    function convertRemToPixels(rem) {
      return (
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
      );
    }
    // Animation
    GSAP.fromTo(
      this.wrapper,
      { x: `${0}px` },
      {
        x: `${0 - this.wrapperWidth + this.arrowWidth}px`,
        duration: 0.7,
      }
    );
    GSAP.fromTo(
      this.arrowIcon,
      { rotate: '0deg' },
      { rotate: '180deg', duration: 0.3 }
    );

    GSAP.fromTo(
      this.switchBtn,
      { rotate: '0deg', x: `${0}px` },
      {
        rotate: '90deg',
        x: `${this.wrapperWidth - convertRemToPixels(3) - this.arrowWidth - 4}`,
        duration: 0.3,
      }
    );
    this.isVisible = false;
  }
  showHero(isMobile) {
    this.show();
    // if (!isMobile) {

    //   this.timeline.fromTo(
    //     this.selectorChildren.heroBanner,
    //     { x: '-100%', autoAlpha: 0 },
    //     { x: '0%', autoAlpha: 1, duration: 1 }
    //   );
    // } else {
    //   this.timeline.fromTo(
    //     this.selectorChildren.heroBanner,
    //     { y: '100%', autoAlpha: 0 },
    //     { y: '0%', autoAlpha: 1, duration: 1 }
    //   );
    // }
  }
  changeColor(target, state) {
    return new Promise((resolve) => {
      if (state === 'on') {
        // Dark mode
        ColorsManager.change({
          color: target.getAttribute('data-color'),
          backgroundColor: target.getAttribute('data-background'),
          transparent: '1,1,1,0.9',
          brightnessOn: '1',
          brightnessOff: '0.8',
          linkColor: '196, 113, 237',
        });
      } else {
        // Light mode
        ColorsManager.change({
          color: '0,0,0',
          backgroundColor: '255,255,255',
          transparent: '255,255,255,0.25',
          brightnessOn: '0.95',
          brightnessOff: '1',
          linkColor: '247, 121, 125',
        });
      }

      this.animationIn = GSAP.timeline();
      this.animationIn.fromTo(
        this.element,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          onComplete: resolve,
        }
      );

      // when animations are complete
      this.animationIn.call((_) => {
        // this.addEventListeners();

        resolve();
      });
    });
  }
  addEventListeners() {
    this.heroArrow.addEventListener('click', (e) => {
      if (this.isVisible) this.hide();
      else this.show();
    });

    this.switchBtn.addEventListener('click', (e) => {
      if (e.target.value === 'on') {
        e.target.value = 'off';
      } else {
        e.target.value = 'on';
      }
      this.changeColor(e.target, e.target.value);
    });
  }

  removeEventListeners() {}

  onResize() {
    this.wrapperWidth = this.wrapper.getBoundingClientRect().width;
    this.arrowWidth = this.heroArrow.getBoundingClientRect().width;
    if (this.isVisible) this.show();
    else this.hide();
  }
  update() {}
}
