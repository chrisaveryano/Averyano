import Page from 'classes/Page';
import Contact from './sections/Contact';

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
      },
    });

    this.createContact();
  }

  create() {
    super.create();
    super.createNavigation();
  }

  createContact() {
    this.contact = new Contact();
  }

  destroy() {
    super.destroy();

    this.link.removeEventListeners();
  }
}
