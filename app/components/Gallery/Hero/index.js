import GSAP from 'gsap';
import map from 'lodash/map';
import each from 'lodash/each';

import Media from './Media';

export default class {
  constructor() {
    this.autoPilot = false;
    this.inVision = true;
    this.medias = [];

    this.homeHero = document.querySelector('.home__hero');
    this.galleryElement = document.querySelector('.hero__gallery');
    this.galleryMedias = document.querySelectorAll('.hero__gallery__media');

    // we set the bounds here to avoid any issues with resize later
    this.galleryBounds = this.galleryElement.getBoundingClientRect();

    this.createGallery();

    this.offset = {
      x: 0,
      y: 0,
    };

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1,
      direction: 'left',
    };

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1,
      direction: 'bottom',
    };

    this.scrollCurrent = {
      x: 0,
      y: 0,
    };

    this.scroll = {
      x: 0,
      y: 0,
    };

    this.timer = setTimeout(() => {
      this.startAutoPilot();
    }, 6000);

    this.show();
  }

  createGallery() {
    each(this.galleryMedias, (img, i) => {
      const media = new Media({ img, i });
      this.medias.push(media);
    });
  }

  createArray() {
    this.imageArray = [
      {
        x: -645.0750122070312,
        y: 14.100000381469727,
        width: 418.3000183105469,
        height: 850.7000122070312,
        src: 'http://localhost:3000/images/hero/prelabComparison.jpg',
        i: 0,
      },
      {
        x: -212.6750030517578,
        y: 14.100000381469727,
        width: 310.20001220703125,
        height: 310.1999816894531,
        src: 'http://localhost:3000/images/hero/converse_promo.jpg',
        i: 1,
      },
      {
        x: 111.625,
        y: 14.100000381469727,
        width: 634.5,
        height: 310.1999816894531,
        src: 'http://localhost:3000/images/hero/wendel_beauty.jpg',
        i: 2,
      },
      {
        x: 760.2249755859375,
        y: 14.100000381469727,
        width: 310.2000732421875,
        height: 634.5,
        src: 'http://localhost:3000/images/hero/vld-contact.jpg',
        i: 3,
      },
      {
        x: 1084.5250244140625,
        y: 14.100000381469727,
        width: 742.5999755859375,
        height: 742.6000366210938,
        src: 'http://localhost:3000/images/hero/prelabComparison.jpg',
        i: 4,
      },
      {
        x: -212.6750030517578,
        y: 338.3999938964844,
        width: 634.5,
        height: 310.1999816894531,
        src: 'http://localhost:3000/images/hero/OniMask.jpg',
        i: 5,
      },
      {
        x: 435.92498779296875,
        y: 338.3999938964844,
        width: 310.20001220703125,
        height: 310.1999816894531,
        src: 'http://localhost:3000/images/hero/wendel_moretti_together.jpg',
        i: 6,
      },
      {
        x: -212.6750030517578,
        y: 662.7000122070312,
        width: 850.7000122070312,
        height: 418.29998779296875,
        src: 'http://localhost:3000/images/hero/abstract1.jpg',
        i: 7,
      },
      {
        x: 652.125,
        y: 662.7000122070312,
        width: 418.300048828125,
        height: 850.7000122070312,
        src: 'http://localhost:3000/images/hero/GardenOfLight.jpg',
        i: 8,
      },
      {
        x: 1084.5250244140625,
        y: 770.7999877929688,
        width: 310.199951171875,
        height: 634.5000610351562,
        src: 'http://localhost:3000/images/hero/phukr.jpg',
        i: 9,
      },
      {
        x: 1408.824951171875,
        y: 770.7999877929688,
        width: 418.300048828125,
        height: 418.29998779296875,
        src: 'http://localhost:3000/images/hero/converse_promo.jpg',
        i: 10,
      },
      {
        x: -645.0750122070312,
        y: 878.9000244140625,
        width: 418.3000183105469,
        height: 634.5,
        src: 'http://localhost:3000/images/hero/GardenOfLight.jpg',
        i: 11,
      },
      {
        x: -212.6750030517578,
        y: 1095.0999755859375,
        width: 418.29998779296875,
        height: 418.300048828125,
        src: 'http://localhost:3000/images/hero/drzDesktop1.jpg',
        i: 12,
      },
      {
        x: 219.72500610351562,
        y: 1095.0999755859375,
        width: 418.3000183105469,
        height: 526.4000244140625,
        src: 'http://localhost:3000/images/hero/converse_promo.jpg',
        i: 13,
      },
      {
        x: 1408.824951171875,
        y: 1203.199951171875,
        width: 418.300048828125,
        height: 310.2000732421875,
        src: 'http://localhost:3000/images/hero/abstract1.jpg',
        i: 14,
      },
      {
        x: 1084.5250244140625,
        y: 1419.4000244140625,
        width: 310.199951171875,
        height: 310.199951171875,
        src: 'http://localhost:3000/images/hero/drzDesktop1.jpg',
        i: 15,
      },
      {
        x: -645.0750122070312,
        y: 1527.5,
        width: 310.20001220703125,
        height: 310.199951171875,
        src: 'http://localhost:3000/images/hero/abstract2.jpg',
        i: 16,
      },
      {
        x: -320.7749938964844,
        y: 1527.5,
        width: 526.4000244140625,
        height: 418.300048828125,
        src: 'http://localhost:3000/images/hero/drzDesktop2.jpg',
        i: 17,
      },
      {
        x: 652.125,
        y: 1527.5,
        width: 418.300048828125,
        height: 418.300048828125,
        src: 'http://localhost:3000/images/hero/abstract1.jpg',
        i: 18,
      },
      {
        x: 1408.824951171875,
        y: 1527.5,
        width: 418.300048828125,
        height: 418.300048828125,
        src: 'http://localhost:3000/images/prj1preview.jpg',
        i: 19,
      },
      {
        x: 219.72500610351562,
        y: 1635.5999755859375,
        width: 418.3000183105469,
        height: 418.2999267578125,
        src: 'http://localhost:3000/images/hero/abstract2.jpg',
        i: 20,
      },
      {
        x: 1084.5250244140625,
        y: 1743.699951171875,
        width: 310.199951171875,
        height: 310.199951171875,
        src: 'http://localhost:3000/images/hero/drzDesktop2.jpg',
        i: 21,
      },
      {
        x: -645.0750122070312,
        y: 1851.800048828125,
        width: 310.20001220703125,
        height: 418.300048828125,
        src: 'http://localhost:3000/images/hero/prelabComparison.jpg',
        i: 22,
      },
      {
        x: -320.7749938964844,
        y: 1959.9000244140625,
        width: 526.4000244140625,
        height: 310.2000732421875,
        src: 'http://localhost:3000/images/hero/drzDesktop3.jpg',
        i: 23,
      },
      {
        x: 652.125,
        y: 1959.9000244140625,
        width: 418.300048828125,
        height: 310.2000732421875,
        src: 'http://localhost:3000/images/hero/OniMask.jpg',
        i: 24,
      },
      {
        x: 1408.824951171875,
        y: 1959.9000244140625,
        width: 418.300048828125,
        height: 310.2000732421875,
        src: 'http://localhost:3000/images/hero/wendel_slideshow.jpg',
        i: 25,
      },
      {
        x: 219.72500610351562,
        y: 2068,
        width: 418.3000183105469,
        height: 202.10009765625,
        src: 'http://localhost:3000/images/hero/cpose.jpg',
        i: 26,
      },
      {
        x: 1084.5250244140625,
        y: 2068,
        width: 310.199951171875,
        height: 202.10009765625,
        src: 'http://localhost:3000/images/hero/drzDesktop3.jpg',
        i: 27,
      },
    ];
  }
  // Animations
  show() {
    map(this.medias, (media) => media.show());
  }

  hide() {
    map(this.medias, (media) => media.hide());
  }

  /**
   * Events.
   */

  checkMobile() {
    let media = window.matchMedia('(max-width: 768px)');
    this.isMobile = !media.matches ? false : true;
    if (this.isMobile) {
      // Mobile basic
      this.galleryElement.style.transform = `scale(1)`;
    } else if (!this.isMobile) {
      // Desktop basic
      this.galleryElement.style.transform = `scale(1.5)`;
      this.galleryElement.style.transformOrigin = `center`;
      // 4K Resolution
      media = window.matchMedia('(min-width: 3840px)');
      if (media.matches) {
        this.galleryElement.style.transform = `scale(2.25)`;
      }
    }
  }

  onResize(e) {
    this.checkMobile();

    if (!this.isMobile) {
      this.offset.x = this.galleryBounds.width * 0.2;
      this.offset.y = this.galleryBounds.height * 0.2;
    } else {
      this.offset.x = 1200;
      this.offset.y = this.galleryBounds.height * 0.2;
    }

    this.galleryWidth =
      this.galleryBounds.width / window.innerWidth + this.offset.x;

    this.galleryHeight =
      this.galleryBounds.height / window.innerHeight + this.offset.y;

    this.gallerySizes = {
      height: this.galleryBounds.height / window.innerHeight,
      width: this.galleryBounds.width / window.innerWidth,
    };

    this.scroll.x = this.x.target = 0;
    this.scroll.y = this.y.target = 0;

    map(this.medias, (media) => media.onResize(this.gallerySizes, this.scroll));

    this.checkMobile();

    // window.requestAnimationFrame((_) => {
    //   this.onResizing = false;
    // });
  }

  onTouchDown({ x, y }) {
    if (this.autoPilot) this.autoPilot = false;
    this.scrollCurrent.x = this.scroll.x;
    this.scrollCurrent.y = this.scroll.y;
  }

  onTouchMove({ x, y }) {
    const xDistance = x.start - x.end;
    const yDistance = y.start - y.end;

    this.x.target = this.scrollCurrent.x - xDistance;
    this.y.target = this.scrollCurrent.y - yDistance;
  }

  onTouchUp({ x, y }) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.startAutoPilot();
    }, 12000);
  }

  onWheel({ deltaX, deltaY }) {
    this.x.target -= deltaX;
    this.y.target -= deltaY;
  }

  startAutoPilot() {
    this.autoPilot = true;
  }
  stopAutoPilot() {
    this.autoPilot = false;
  }

  /**
   * Update.
   */

  update() {
    if (!this.galleryBounds || !this.inVision) return;

    if (this.autoPilot) {
      this.y.target += 1;
      this.x.target += 1;
      this.y.direction = 'top';
      this.x.direction = 'right';
    }

    this.x.current = GSAP.utils.interpolate(
      this.x.current,
      this.x.target,
      this.x.lerp
    );

    this.y.current = GSAP.utils.interpolate(
      this.y.current,
      this.y.target,
      this.y.lerp
    );

    if (this.scroll.x < this.x.current) {
      this.x.direction = 'right';
    } else if (this.scroll.x > this.x.current) {
      this.x.direction = 'left';
    }

    if (this.scroll.y < this.y.current) {
      this.y.direction = 'top';
    } else if (this.scroll.y > this.y.current) {
      this.y.direction = 'bottom';
    }

    this.scroll.x = this.x.current;
    this.scroll.y = this.y.current;

    map(this.medias, (media, i) => {
      const x = media.position.x;

      if (this.x.direction === 'left' && x < -this.galleryWidth * 0.8) {
        media.extra.x += this.galleryBounds.width;
      } else if (this.x.direction === 'right') {
        if (
          (x > this.galleryBounds.width * 0.85 && !this.isMobile) ||
          (x > this.galleryWidth && this.isMobile)
        )
          // this condition is a patch for mobile
          media.extra.x -= this.galleryBounds.width;
      }

      const y = media.position.y;

      if (this.y.direction === 'bottom' && y < -this.galleryHeight * 1.2) {
        media.extra.y += this.galleryBounds.height;
      } else if (
        this.y.direction === 'top' &&
        y > this.galleryBounds.height * 0.8
      ) {
        media.extra.y -= this.galleryBounds.height;
      }

      media.update(this.scroll);
    });
  }
}
