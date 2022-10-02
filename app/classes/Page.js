import GSAP from 'gsap';

import NormalizeWheel from 'normalize-wheel';
import Prefix from 'prefix';

import each from 'lodash/each';
import map from 'lodash/map';

import Paragraph from '../animations/Paragraph';
import FadeIn from '../animations/FadeIn';

export default class Page {
  constructor({ element, elements, id }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements,

      animationsParagraphs: '[data-animation="paragraph"]',
      animationsFade: '[data-animation="fade"]',
      animationsFloating: '[data-animation="floating"]',

      animationsNav: '.navigation',
      animationsNavTrigger: '.home__gallery',

      preloaders: '[data-src]',
    };
    this.id = id;
    this.transformPrefix = Prefix('transform');

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 1000,
    };

    this.x = {
      start: 0,
      end: 0,
    };
    this.y = {
      start: 0,
      end: 0,
    };

    this.media = window.matchMedia('(max-width: 1024px)');
    this.mediaHeight = {
      current: 0,
      previous: 0,
    };
    this.isResizing = false;
    this.mediaMobile = false;

    this.isDown = false;

    this.onWheelEvent = this.onWheel.bind(this);
  }

  createNavigation() {
    const activateLink = (selector) => {
      each(selector, (link) => {
        const href = link.href;
        const linkNaming = href.split('#')[1];
        // link.href = '';

        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById(`${linkNaming}`);

          if (this.mediaMobile) {
            const posY = target.getBoundingClientRect().y + window.pageYOffset;
            window.scrollTo({
              top: posY,
              behavior: 'smooth',
            });
          } else {
            this.scroll.target += target.getBoundingClientRect().y;
          }
        });
      });
    };
    activateLink(this.selectorChildren.footerLinks);
    activateLink(this.selectorChildren.navigationLinks);

    // logo
    this.selectorChildren.navigationLogo.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.mediaMobile) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        this.scroll.target = 0;
      }
    });
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 1000,
    };
    // we use lodash to forEach through Object {}
    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].length === 0) {
          // If entry doesn't exist (the NodeList is empty) we set it to null
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          // If the returned NodeList contains only 1 element, we querySelector that element
          this.elements[key] = document.querySelector(entry);
        }
      }
    });

    this.createAnimations();
    // this.createPreloader();
  }

  checkMedia() {
    if (this.media.matches && !this.mediaMobile) {
      // mobile
      window.scrollTo(0, 0);
      this.mediaMobile = true;
    }

    if (!this.media.matches && this.mediaMobile) {
      // desktop
      this.mediaMobile = false;
      this.scroll.target = 0;
      window.scrollTo(0, 0);
    }
  }
  createAnimations() {
    // this.animations = [];
    // this.animationsTitles = map(this.elements.animationsTitles, (element) => {
    //   return new Title(element);
    // });

    this.animationsParagraphs = map(
      this.elements.animationsParagraphs,
      (element) => {
        return new Paragraph(element);
      }
    );

    // If it's a single element
    if (!this.elements.animationsFade.length) {
      this.animationsFade = new FadeIn(this.elements.animationsFade);
    } else {
      this.animationsFade = map(this.elements.animationsFade, (element) => {
        return new FadeIn(element);
      });
    }

    // @todo - show background below navigation
    // this.navigation = new Navigation();
  }
  // createPreloader() {
  //   this.preloaders = map(this.elements.preloaders, (element) => {
  //     return new AsyncLoad(element);
  //   });
  // }
  show() {
    return new Promise((resolve) => {
      // ColorsManager.change({
      //   backgroundColor: this.element.getAttribute('data-background'),
      //   color: this.element.getAttribute('data-color'),
      // });
      this.animationIn = GSAP.timeline();
      this.animationIn.fromTo(
        this.element,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          onComplete: resolve,
        }
      );

      // when animations are complete
      this.animationIn.call((_) => {
        this.addEventListeners();

        resolve();
      });
    });
  }

  hide() {
    return new Promise((resolve) => {
      this.destroy();
      this.removeEventListeners();

      this.animationOut = GSAP.timeline();
      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve,
      });
    });
  }
  // Events
  onWheel(event) {
    if (!event) return;

    const { pixelY } = NormalizeWheel(event);
    this.scroll.target += pixelY;
  }

  onResize() {
    this.isResizing = true;

    if (this.element && this.element.classList.contains('home')) {
      // Resizing homepage
      if (this.media.matches) {
        this.mediaHeight.current = window.innerHeight;
        if (this.mediaHeight.previous === 0) {
          this.mediaHeight.previous = window.innerHeight;
        }
        // Change hero section height to match mobile height (including browser UI)

        if (this.mediaHeight.current === this.mediaHeight.previous) {
          document.querySelector(
            '.home__hero'
          ).style.height = `${this.mediaHeight.current}px`;
        } else {
          const percent = this.mediaHeight.current / this.mediaHeight.previous;
          // if the difference is 20% change height
          if (percent <= 0.8 || percent >= 1.2) {
            this.mediaHeight.previous = window.innerHeight;
            document.querySelector(
              '.home__hero'
            ).style.height = `${this.mediaHeight.previous}px`;
          }
        }
      } else {
        document.querySelector('.home__hero').style.height = `100vh`;
      }
    }
    if (this.elements.wrapper) {
      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight;

      // sets target scroll based on scroll %%
      // prettier-ignore
      const diff = this.scroll.limit - (this.scroll.limit - (this.scroll.limit * this.scroll.percent) / 100);
      if (diff) this.scroll.target = diff;
      else this.scroll.target = 0;

      this.checkMedia();

      if (this.mediaMobile) {
        this.scroll.target = 0;
      }

      this.isResizing = false;
    }

    if (this.elements.playingVideos.length > 0) {
      console.log(this.elements.playingVideos);
    }
    // each(this.animationsTitles, (animation) => animation.onResize());
  }

  // Loop
  update() {
    if (!this.scroll) return;

    this.scroll.target = GSAP.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    this.scroll.current = GSAP.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.1
    );

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }

    this.scroll.last = this.scroll.current.toFixed();

    // Update translateY only if the movement is actually made
    if (this.scroll.current.toFixed() != this.scroll.target) {
      if (this.elements.wrapper) {
        // console.log('upd 1 (page)');
        this.elements.wrapper.style[
          this.transformPrefix
        ] = `translateY(-${this.scroll.current.toFixed()}px)`;
      }

      if (this.elements.scrollbar && !this.isResizing) {
        this.scroll.percent = (this.scroll.current / this.scroll.limit) * 100;

        // round
        if (this.scroll.percent < 0.1) this.scroll.percent = 0;
        if (this.scroll.percent > 99.7) this.scroll.percent = 100;

        this.elements.scrollbar.style[
          this.transformPrefix
        ] = `translateY(${this.scroll.percent}%)`;
      }
    }
  }

  addEventListeners() {}

  removeEventListeners() {
    // window.removeEventListener('mousewheel', this.onWheelEvent);
  }

  destroy() {
    this.removeEventListeners();
  }
}
