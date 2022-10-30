import GSAP from 'gsap';

export default class {
  constructor({ img, i }) {
    this.position = {
      x: 0,
      y: 0,
      prevx: 0,
      prevy: 0,
    };
    this.element = img;
    this.index = i;
    this.galleryElement = document.querySelector('.hero__gallery');

    // this.sizes will be calculated after all the content is created
    this.extra = {
      x: 0,
      y: 0,
    };

    this.create();
    this.addEventListeners();
  }

  create() {
    this.bounds = this.element.getBoundingClientRect();
    this.defaultX = this.bounds.x;
    this.defaultY = this.bounds.y;
    this.createBounds();
  }

  createBounds() {
    this.position.x = this.defaultX;
    this.position.y = this.defaultY;
    this.bounds = this.element.getBoundingClientRect();
    this.update();
  }

  /**
   * Events.
   **/
  // Animations
  show(delayTiming = this.index * 0.25) {
    GSAP.fromTo(
      this.element,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        // delay: delayTiming,
      },
      1
    );
  }

  hide() {
    GSAP.to(this.element, {
      autoAlpha: 0,
    });
  }

  onResize(sizes, scroll) {
    this.extra = {
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
    };

    // this.sizes = sizes;
    // variables
    this.position.x = this.defaultX;
    this.position.y = this.defaultY;
    // this.position.x = this.bounds.x + scroll.x + this.extra.x;
    // this.position.y = this.bounds.y + scroll.y + this.extra.y;
  }

  updateScale() {}

  addEventListeners() {
    this.element.addEventListener('animationend', () => {
      this.element.classList.remove('hero__gallery__media--anim');
    });
  }
  /**
   * Loop.
   **/
  update(scroll = { x: 0, y: 0 }) {
    if (!this.bounds) return;

    // fade-in fx
    if (this.extra.prevX < this.extra.x || this.extra.prevX > this.extra.x) {
      this.element.classList.add('hero__gallery__media--anim');
    }
    if (this.extra.prevY < this.extra.y || this.extra.prevY > this.extra.y) {
      this.element.classList.add('hero__gallery__media--anim');
    }

    // position
    this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;

    // variables
    this.extra.prevX = this.extra.x;
    this.extra.prevY = this.extra.y;
    this.position.x = this.bounds.x + scroll.x + this.extra.x;
    this.position.y = this.bounds.y + scroll.y + this.extra.y;
  }
}
