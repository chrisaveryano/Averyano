import GSAP from 'gsap';

import Component from '../../../classes/Component';
import Image from '../../../components/Hero/Image';

import each from 'lodash/each';
import map from 'lodash/map';
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
    this.images = [];
    // We can add listeners here
    // this.createImages();
  }

  createImages() {
    // map(this.selectorChildren.heroImages, (image, i) => {
    //   const imgRect = image.getBoundingClientRect();
    //   const x = imgRect.x;
    //   const y = imgRect.y;
    //   const width = imgRect.width;
    //   const height = imgRect.height;
    //   const bounds = this.galleryBounds;
    //   const img = new Image({ image, x, y, width, height, bounds, i });
    //   this.images.push(img);
    // });
    // console.log(this.images);
    // map(this.images, (image) => image.create());
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

  // onResize(e) {
  //   this.galleryBounds = this.heroGridWrapper.getBoundingClientRect();

  //   this.gallerySizes = {
  //     height: this.galleryBounds.height / window.innerHeight,
  //     width: this.galleryBounds.width / window.innerWidth,
  //   };
  // }
  addEventListeners() {}

  removeEventListeners() {}

  update() {}
}
