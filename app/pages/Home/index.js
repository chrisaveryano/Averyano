import Page from 'classes/Page';
import Contact from './sections/Contact';
import Hero from './sections/Hero';

import each from 'lodash/each';

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

    this.createContact();
    this.createHero();
  }

  createContact() {
    this.contact = new Contact();
  }

  createHero() {
    this.hero = new Hero({
      heroBanner: this.elements.heroBanner,
      heroImages: this.elements.heroImages,
    });
  }

  showHero(isMobile) {
    if (this.hero && this.hero.showHero) {
      this.hero.showHero(isMobile);
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
