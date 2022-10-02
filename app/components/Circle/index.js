// import { text } from 'express';
import GSAP from 'gsap';
import Modal from '../Modal';

export default class Circle {
  constructor({ elementContainer, element, scale }) {
    this.elementContainer = elementContainer;
    this.element = element;
    this.scale = scale;
    this.mouse = {
      x: 0,
      y: 0,
      direction: 'right',
    };
    this.rotation = 0;
    this.isAnimating = false;
    this.addEventListeners();
  }

  stopAnimating() {
    console.log('stopAnimating');
    this.isAnimating = false;
  }
  addEventListeners() {
    this.elementContainer.onmouseenter = () => {
      if (!this.element.classList.contains('circleanimate')) {
        this.element.classList.add('circleanimate');
        this.element.addEventListener(
          'animationend',
          () => {
            this.element.classList.remove('circleanimate');
          },
          { once: true }
        );
      }
    };

    this.elementContainer.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        e.target.classList.contains('home__contact__button__text') ||
        (e.target.classList.contains('home__contact__button') &&
          !this.isAnimating)
      ) {
        this.isAnimating = true;

        if (!this.modal) {
          this.modal = new Modal();
        } else {
          this.modal.create();
        }
      }
    });

    // this.elementContainer.onmousemove = (evt) => {
    //   this.mouse.x = evt.clientX - window.innerWidth / 2;
    //   this.mouse.y = evt.clientY - window.innerHeight / 2;
    //   this.rotation = Math.atan2(this.mouse.y, this.mouse.x);

    //   // @prettier-ignore
    //   const rot = this.rotation * (180 / Math.PI);

    //   this.element.style.transform = `translate(0px, 0px) rotate(${rot}deg) scale(${this.scale})`;
    // };

    this.elementContainer.onmouseleave = () => {};
  }
  removeEventListeners() {}
}
