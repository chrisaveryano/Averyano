import GSAP from 'gsap';

import each from 'lodash/each';
import { ColorsManager } from 'classes/Colors';

export default class Hero {
  constructor() {
    this.isVisible = true;

    this.wrapper = {
      element: document.querySelector('.home__hero__wrapper'),
      width: 0,
      height: 0,
    };

    this.arrow = {
      element: document.querySelector('.home__hero__left__hide'),
      icon: document.querySelector('.home__hero__hide__arrow'),
      width: 0,
      height: 0,
    };

    this.switchState = 'on';
    this.switchBtn = document.querySelector('.hero__switch__container');
    this.heroLogo = document.getElementById('hero__avlogo');

    this.timeline = GSAP.timeline(
      this.wrapper.element,
      { x: '-100%' },
      { x: '0%', duration: 1 },
      1
    );
    this.addEventListeners();

    // if (
    //   window.matchMedia &&
    //   window.matchMedia('(prefers-color-scheme: light)').matches
    // ) {
    //   this.switchState = 'off';
    //   this.changeColor(this.switchState);
    // }

    // if (
    //   window.matchMedia &&
    //   window.matchMedia('(prefers-color-scheme: dark)').matches
    // )
    //   this.switchState = 'on';
  }
  create() {}

  show() {
    // if coming from resize, change instantly
    if (this.isVisible) {
      GSAP.set(this.wrapper.element, {
        x: `${this.wrapper.width - this.wrapper.width}px`,
      });

      if (this.isMobile) {
        GSAP.set(this.arrow.icon, {
          rotate: '270deg',
        });

        // GSAP.set(this.switchBtn {
        //   rotate: '0deg',
        // });
      } else {
        GSAP.set(this.arrow.icon, {
          rotate: '0deg',
        });
      }
      return;
    }

    // Animation
    // Desktop version
    if (!this.isMobile) {
      GSAP.fromTo(
        this.wrapper.element,
        { x: `${0 - this.wrapper.width + this.arrow.width}px` },
        { x: `${0}px`, duration: 0.7 }
      );
      GSAP.fromTo(
        this.arrow.icon,
        { rotate: '180deg' },
        { rotate: '0deg', duration: 0.3 }
      );

      GSAP.fromTo(
        this.switchBtn,
        {
          rotate: '90deg',
          x: `${0 + this.wrapper.width - this.arrow.width * 1.58}`,
        },
        {
          rotate: '0deg',
          x: `${0}px`,
          duration: 0.7,
        }
      );
    }
    // Mobile version
    if (this.isMobile) {
      GSAP.fromTo(
        this.wrapper.element,
        { y: `${0 + this.wrapper.height - this.arrow.height}px` },
        { y: `${0}px`, duration: 0.7 }
      );
      GSAP.fromTo(
        this.arrow.icon,
        { rotate: '90deg' },
        { rotate: '270deg', duration: 0.3 }
      );
    }
    this.isVisible = true;
    document.body.classList.remove('refresh');
  }
  hide() {
    // if coming from resize, change instantly
    if (!this.isVisible) {
      // Desktop
      if (!this.isMobile) {
        GSAP.set(this.wrapper.element, {
          x: `${0 - this.wrapper.width + this.arrow.width}px`,
          y: 0,
        });

        GSAP.set(this.arrow.icon, {
          rotate: '180deg',
        });

        GSAP.set(this.switchBtn, {
          x: `${
            this.wrapper.width - convertRemToPixels(3) - this.arrow.width - 4
          }`,
          rotate: '90deg',
        });
      }
      // Mobile
      if (this.isMobile) {
        GSAP.set(this.wrapper.element, {
          x: 0,
          y: `${0 + this.wrapper.height - this.arrow.height}px`,
        });

        GSAP.set(this.arrow.icon, {
          rotate: '90deg',
        });

        GSAP.set(this.switchBtn, {
          x: 0,
          rotate: '0deg',
        });
      }
      return;
    }

    function convertRemToPixels(rem) {
      return (
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
      );
    }
    // Animation
    // Desktop
    if (!this.isMobile) {
      GSAP.fromTo(
        this.wrapper.element,
        { x: `${0}px` },
        {
          x: `${0 - this.wrapper.width + this.arrow.width}px`,
          duration: 0.7,
        }
      );
      GSAP.fromTo(
        this.arrow.icon,
        { rotate: '0deg' },
        { rotate: '180deg', duration: 0.3 }
      );

      GSAP.fromTo(
        this.switchBtn,
        { rotate: '0deg', x: `${0}px` },
        {
          rotate: '90deg',
          x: `${
            this.wrapper.width - convertRemToPixels(3) - this.arrow.width - 4
          }`,
          duration: 0.3,
        }
      );
    } else {
      GSAP.fromTo(
        this.wrapper.element,
        { y: `${0}px` },
        {
          y: `${0 + this.wrapper.height - this.arrow.height}px`,
          duration: 0.7,
        }
      );
      GSAP.fromTo(
        this.arrow.icon,
        { rotate: '270deg' },
        { rotate: '90deg', duration: 0.3 }
      );
    }
    this.isVisible = false;
    document.body.classList.add('refresh');
  }

  changeColor(state) {
    return new Promise((resolve) => {
      if (state === 'on') {
        // Dark mode
        ColorsManager.change({
          color: '245, 239, 225',
          backgroundColor: '1,1,1',
          transparent: '1,1,1,0.9',
          brightnessOn: '1',
          brightnessOff: '0.8',
          linkColor: '196, 113, 237',
          servicesBgColor: '23, 23, 23',
          servicesElColor: '39, 39, 39',
        });
        this.heroLogo.style.filter = `brightness(1)`;
      } else {
        // Light mode
        ColorsManager.change({
          color: '0,0,0',
          backgroundColor: '255,255,255',
          transparent: '255,255,255,0.25',
          brightnessOn: '0.95',
          brightnessOff: '1',
          linkColor: '196, 113, 237',
          servicesBgColor: '250, 250, 250',
          servicesElColor: '199, 199, 199',
          // linkColor: '247, 121, 125',
        });
        this.heroLogo.style.filter = `brightness(0)`;
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

      this.animationIn.call((_) => {
        resolve();
      });
    });
  }
  addEventListeners() {
    this.arrow.element.addEventListener('click', (e) => {
      if (this.isVisible) this.hide();
      else this.show();
    });

    this.switchBtn.addEventListener('click', (e) => {
      if (e.target.value === 'on') {
        e.target.value = 'off';
      } else {
        e.target.value = 'on';
      }
      this.switchState = this.switchState === 'on' ? 'off' : 'on';
      this.changeColor(this.switchState);
    });
  }

  removeEventListeners() {}

  getBounds() {
    this.bounds = this.wrapper.element.getBoundingClientRect();
    this.wrapper['width'] = this.bounds.width;
    this.wrapper['height'] = this.bounds.height;

    this.bounds = this.arrow.element.getBoundingClientRect();
    this.arrow['width'] = this.bounds.width;
    this.arrow['height'] = this.bounds.height;
  }
  onResize(isMobile) {
    this.isMobile = isMobile;
    this.getBounds();

    if (this.isVisible) this.show();
    else this.hide();
  }
  update() {}
}
