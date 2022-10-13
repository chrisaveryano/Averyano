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

  onResize() {
    if (this.hero && this.hero.onResize) {
      this.hero.onResize();
    }
  }

  onTouchDown(event) {
    this.isDown = true;

    this.x.start = event.touches ? event.touches[0].clientX : event.clientX;
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY;

    const values = {
      x: this.x,
      y: this.y,
    };

    if (this.hero) this.hero.onTouchDown(values);
  }

  onTouchMove(event) {
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

  onTouchUp(event) {
    this.isDown = false;
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    this.x.end = x;
    this.y.end = y;

    const values = {
      x: this.x,
      y: this.y,
    };

    if (this.hero) this.hero.onTouchUp(values);
  }

  onWheel(event) {}
  /**
   * Loop.
   */
  update(scroll) {
    if (this.hero && this.hero.inVision) {
      this.hero.update();
    }
  }
}
