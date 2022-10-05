// import { text } from 'express';
import GSAP from 'gsap';

export default class Navigation {
  constructor() {
    this.element = document.querySelector('.navigation');
    this.elementWrapper = document.querySelector('.navigation__wrapper');
  }

  show() {
    GSAP.fromTo(this.elementWrapper, { y: '-100%' }, { y: '0%', duration: 1 });
  }
}
