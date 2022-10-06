import NormalizeWheel from 'normalize-wheel';

import Preloader from './components/Preloader';
import Video from './components/Video';
import Navigation from './components/Navigation';

import Home from './pages/Home';

class App {
  constructor() {
    console.log('v1.07');

    console.log(
      '%c AV',
      'font-weight: bold; font-size: 50px; text-shadow: 1.5px 1.5px 0 #f7797d , 3px 3px 0 #c471ed; padding: 10px 10px 10px 0px; margin-left: -20px;'
    );

    window.scrollTo(0, 0);

    this.checkMedia();

    this.createContent();
    this.createPreloader();
    this.createVideo();

    this.createNavigation();

    this.createPages();

    this.update();

    this.onResize();
    this.onWheel();
  }

  checkMedia() {
    this.media = window.matchMedia('(max-width: 1024px)');
  }

  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }

  createVideo() {
    this.video = new Video();
  }

  createPages() {
    this.pages = {
      home: new Home(),
    };
    this.page = this.pages[this.template];
    this.page.create();
  }

  createNavigation() {
    this.navigation = new Navigation();
  }

  /***
   * Events.
   * **/

  onWheel(event) {
    if (this.page && this.page.onWheel && !this.media.matches) {
      this.page.onWheel(event);
    }
  }

  onPreloaded() {
    this.preloader.destroy();
    this.onResize();

    if (this.page && this.page.show) {
      this.page.show();

      // homepage hero
      if (this.template === 'home') {
        const media = window.matchMedia('(max-width: 768px)');
        const isMobile = !media.matches ? false : true;
        this.page.showHero(isMobile);
      }
    }

    if (this.navigation && this.navigation.show) {
      this.navigation.show();
    }
    this.addEventListeners();
  }

  onResize(e) {
    this.checkMedia();

    if (this.page && this.page.onResize) {
      this.page.onResize(e);
    }
  }

  /***
   * Loop.
   * **/

  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }

    if (this.video && this.video.update) {
      this.video.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    window.addEventListener('mousewheel', this.onWheel.bind(this));

    // popstate for routing
    // window.addEventListener('popstate', this.onPopState.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }
}

new App();
