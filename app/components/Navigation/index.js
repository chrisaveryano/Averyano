// import { text } from 'express';
import GSAP from 'gsap';

export default class Navigation {
  constructor() {
    this.element = document.querySelector('.navigation');
    this.elementWrapper = document.querySelector('.navigation__wrapper');
  }

  show() {
    GSAP.set(this.elementWrapper, { y: '0%' });
  }
}
