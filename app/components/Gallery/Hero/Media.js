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
  }

  create() {
    this.createBounds();
  }

  createBounds() {
    this.bounds = this.element.getBoundingClientRect();
    this.position.x = this.bounds.x;
    this.position.y = this.bounds.y;
    this.update();
  }

  // Animations
  show() {
    GSAP.fromTo(
      this.element,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        delay: this.index * 0.25,
      },
      1
    );
  }

  hide() {
    GSAP.to(this.element, {
      autoAlpha: 0,
    });
  }

  /**
   * Events.
   */
  loaded(figure) {
    GSAP.fromTo(
      this.element,
      {
        scale: 0,
      },
      { scale: 1, duration: 0.9, delay: this.index * 0.15, ease: 'expo.out' }
    );

    // this.createBounds();
  }
  onResize(sizes, scroll) {
    this.extra = {
      x: 0,
      y: 0,
    };

    // in percent I guess
    this.sizes = sizes;

    // the 1st refresh doesn't contain scroll, that's why we check if scroll exists, and if it does we pass scroll.x (and scroll.y)
    // if (scroll) {
    //   this.updateX(scroll && scroll.x);
    //   this.updateY(scroll && scroll.y);
    // }
  }

  updateScale() {
    // It's returning percentages
    // this.height = this.bounds.height / window.innerHeight;
    // this.width = this.bounds.width / window.innerWidth;
    // this.position.x = this.sizes.width * this.width;
    // this.position.y = this.sizes.height * this.height;
    // on webGL x = 0 and y = 0 are the center of the screen. So to place an element at the top left, we have to divide the viewport by 2
    // top-left position:
    // this.mesh.position.x = -width / 2 + this.mesh.scale.x / 2;
    // this.mesh.position.y = height / 2 - this.mesh.scale.y / 2;
  }

  /**
   * Loop.
   */
  update(scroll = { x: 0, y: 0 }) {
    if (!this.bounds) return;
    this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;

    this.position.x = this.bounds.x + scroll.x + this.extra.x;
    this.position.y = this.bounds.y + scroll.y + this.extra.y;
  }
}
