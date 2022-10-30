// @todo:
// hide the box by default
// on mobile disable the touch on body to prevent refreshing
// when the box is open on mobile, re-enable the touch
// optimize infinite scroll on mobile, offset needs to be different
import Hero from './Hero';

// Box is made from Mesh and Program
// Program are all the shaders required to build
export default class Gallery {
  constructor({ template }) {
    this.heroSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.template = template;
    this.x = {
      start: 0,
      distance: 0,
      end: 0,
    };
    this.y = {
      start: 0,
      distance: 0,
      end: 0,
    };

    this.createHero();
    this.onResize();
  }

  createHero() {
    this.hero = new Hero();
  }

  /**
   * Events.
   **/

  checkMobile() {
    if (this.hero && this.hero.checkMobile) {
      this.hero.checkMobile();
    }
  }
  onResize() {
    if (this.hero && this.hero.onResize) {
      this.hero.onResize();
    }
  }

  onTouchDown(event) {
    if (
      event.target.classList.contains('hero__gallery') ||
      event.target.classList.contains('hero__gallery__media')
    ) {
      this.isDown = true;

      this.x.start = event.touches ? event.touches[0].clientX : event.clientX;
      this.y.start = event.touches ? event.touches[0].clientY : event.clientY;

      const values = {
        x: this.x,
        y: this.y,
      };

      if (this.hero) this.hero.onTouchDown(values);
    }
  }

  onTouchMove(event) {
    if (
      event.target.classList.contains('hero__gallery') ||
      event.target.classList.contains('hero__gallery__media')
    ) {
      if (!this.isDown) return;

      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const y = event.touches ? event.touches[0].clientY : event.clientY;

      this.x.end = x;
      this.y.end = y;

      const values = {
        x: this.x,
        y: this.y,
      };

      if (this.hero) this.hero.onTouchMove(values);
    }
  }

  onTouchUp(event) {
    this.isDown = false;

    // console.log(event, event.touches[0]);
    // const x = event.touches[0].clientX ? event.touches[0].clientX : 0;
    // const y = event.touches[0].clientX ? event.touches[0].clientY : 0;

    // this.x.end = x;
    // this.y.end = y;

    const values = {
      x: this.x,
      y: this.y,
    };

    if (this.hero) this.hero.onTouchUp(values);
  }

  onWheel(event) {
    if (this.hero && this.hero.onWheel) {
      this.hero.onWheel(event);
    }
  }
  /**
   * Loop.
   */
  update(scroll) {
    if (this.hero && this.hero.inVision) {
      this.hero.update();
    }
  }
}
