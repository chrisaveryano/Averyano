import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import Video from './components/Video';

import Home from './pages/Home';

class App {
  constructor() {
    const version = 'v1.0.8c';
    console.log(version);
    document.querySelector('.development__version').textContent += version;

    console.log(
      '%c AV',
      'font-weight: bold; font-size: 50px; text-shadow: 1.5px 1.5px 0 #f7797d , 3px 3px 0 #c471ed; padding: 10px 10px 10px 0px; margin-left: -20px;'
    );

    this.checkMedia();

    this.createContent();
    this.createPreloader();
    this.createVideo();

    // this.createNavigation();

    this.createPages();

    this.update();

    this.onResize();
    // this.onWheel();

    // this.onTouchDown();
    // this.onTouchUp();
    // this.onTouchMove();
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
    // event.preventDefault();

    if (
      event.target.classList.contains('hero__gallery') ||
      event.target.classList.contains('hero__gallery__media')
    ) {
      if (this.gallery && this.gallery.onWheel) {
        this.gallery.onWheel(event);
        this.gallery.onTouchUp();
      }
    } else {
      if (this.page && this.page.onWheel && !this.media.matches) {
        this.page.onWheel(event);
      }
    }
  }

  onPreloaded() {
    this.preloader.destroy();

    window.scrollTo(0, 0);

    this.onResize();
    this.addEventListeners();

    if (this.page && this.page.show) {
      this.page.show();
      this.gallery = new Gallery(this.template);
    }

    if (this.navigation && this.navigation.show) {
      this.navigation.show();
    }
  }

  onTouchDown(e) {
    this.startY = e && e.touches ? e.touches[0].pageY : 0;

    if (this.gallery && this.gallery.onTouchDown) {
      this.gallery.onTouchDown(e);
    }
  }

  onTouchMove(e) {
    if (this.startY && e) {
      this.currentY = e.touches ? e.touches[0].pageY : 0;
      // Activate custom pull-to-refresh effects when at the top of the container
      // and user is scrolling up.
      if (
        document.scrollingElement.scrollTop === 0 &&
        this.currentY > this.startY &&
        !document.body.classList.contains('refresh')
      ) {
        document.body.classList.add('refresh');
        // refresh inbox.
      } else if (
        !document.scrollingElement.scrollTop === 0 &&
        this.currentY < this.startY
      ) {
        document.body.classList.remove('refresh');
      }
    }
    if (this.gallery && this.gallery.onTouchMove) {
      this.gallery.onTouchMove(e);
    }
  }

  onTouchUp(e) {
    if (this.gallery && this.gallery.onTouchUp) {
      this.gallery.onTouchUp(e);
    }
  }

  onResize() {
    this.checkMedia();

    if (this.page && this.page.onResize) {
      this.page.onResize();
    }

    if (this.gallery && this.gallery.checkMobile) {
      this.gallery.checkMobile();
    }

    if (this.gallery && this.gallery.onResize) {
      this.gallery.onResize();
    }
  }

  /***
   * Loop.
   * **/

  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }

    if (this.gallery && this.gallery.update) {
      this.gallery.update();
    }

    if (this.video && this.video.update) {
      this.video.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    window.addEventListener('mousewheel', this.onWheel.bind(this));

    window.addEventListener('mousedown', this.onTouchDown.bind(this));
    window.addEventListener('mousemove', this.onTouchMove.bind(this));
    window.addEventListener('mouseup', this.onTouchUp.bind(this));

    window.addEventListener('touchstart', this.onTouchDown.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this));
    window.addEventListener('touchend', this.onTouchUp.bind(this));

    // popstate for routing
    // window.addEventListener('popstate', this.onPopState.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }
}

new App();
