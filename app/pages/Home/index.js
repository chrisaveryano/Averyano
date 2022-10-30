import Page from 'classes/Page';
import Contact from './sections/Contact';
import Hero from './sections/Hero';

import GSAP from 'gsap';

export default class Home extends Page {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        videos: '.home__gallery__item',
        playingVideos: [],
        wrapper: '.home__wrapper',
        scrollbar: '.scroll__nav__bar',
        navigation: document.querySelector('.navigation'),
        navigationLinks: document.querySelectorAll('.navigation__list__link'),
        footerLinks: document.querySelectorAll('.footer__list__link--menu'),
        navigationLogo: document.querySelector(
          '.navigation__list__link--logo a'
        ),
        heroImages: document.querySelectorAll('.hero__grid__img'),
        heroBanner: document.querySelector('.home__hero__left'),
      },
    });
  }

  create() {
    super.create();
    super.createNavigation();
    super.createServices();

    this.media = window.matchMedia('(max-width: 768px)');
    this.isMobile = !this.media.matches ? false : true;

    this.createContact();
    this.createHero();
  }

  createHero() {
    this.hero = new Hero();
  }
  createContact() {
    this.contact = new Contact();
  }
  createServices() {
    this.services = new Services();
  }

  onResize() {
    super.onResize();

    this.isMobile = !this.media.matches ? false : true;
    if (this.hero && this.hero.onResize) {
      this.hero.onResize(this.isMobile);
    }
  }

  show() {
    const timeline = GSAP.timeline({
      delay: 0.1,
    });

    timeline.fromTo(
      this.element,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    );

    super.show(timeline);
  }

  destroy() {
    super.destroy();

    this.link.removeEventListeners();
  }
}
