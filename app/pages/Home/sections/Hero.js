import GSAP from 'gsap';

import Component from '../../../classes/Component';

import each from 'lodash/each';
// import { split } from 'utils/text';

export default class Hero extends Component {
  constructor({ heroBanner, heroImages }) {
    super({
      element: '.home__hero',
      elements: {
        heroBanner: heroBanner,
        heroImages: heroImages,
      },
    });

    this.heroGrid = document.querySelector('.hero__grid');
    this.heroGridWrapper = document.querySelector('.hero__grid__wrapper');
  }
  create() {
    // We can add listeners here
  }

  showHero(isMobile) {
    return new Promise((resolve) => {
      this.animationIn = GSAP.timeline();

      each(this.selectorChildren.heroImages, (image, i) => {
        this.animationIn.fromTo(
          image,
          { scale: 0, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 2.2,
            delay: i * 0.15,
            ease: 'expo.out',
          },
          1
        );
      });

      if (!isMobile) {
        GSAP.fromTo(
          this.selectorChildren.heroBanner,
          { x: '-100%', autoAlpha: 0 },
          { x: '0%', autoAlpha: 1, duration: 1 }
        );
      } else {
        GSAP.fromTo(
          this.selectorChildren.heroBanner,
          { y: '100%', autoAlpha: 0 },
          { y: '0%', autoAlpha: 1, duration: 1 }
        );
      }

      this.animationIn.call((_) => {
        resolve();
      });
    });
  }

  onResize(e) {
    this.galleryBounds = this.heroGridWrapper.getBoundingClientRect();
    // console.log(e);
    // console.log(e);
    // this.sizes = e.sizes;

    this.gallerySizes = {
      height: this.galleryBounds.height / window.innerHeight,
      width: this.galleryBounds.width / window.innerWidth,
    };
    // console.log(this.heroGridWrapper.getBoundingClientRect());
    // console.log(this.galleryBounds);
    // console.log(this.gallerySizes);
  }
  addEventListeners() {}

  removeEventListeners() {}
}
