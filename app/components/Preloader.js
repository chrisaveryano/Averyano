import GSAP from 'gsap';
import Component from '../classes/Component';
import each from 'lodash/each';
// import { split } from 'utils/text';

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        numberText: '.preloader__number__text',
        circle: '.preloader__circle',
        images: document.querySelectorAll('img'),
        videos: document.querySelectorAll('video'),
        videoSources: document.querySelectorAll('source'),
      },
    });

    this.currentColor = 'hero__tonys-pink';
    this.colorArrayDefault = [
      'hero__tonys-pink',
      'hero__goldenrod',
      'hero__biloba-flower',
      'hero__lochmara',
      'hero__monte-carlo',
    ];

    this.colorArrayNew = this.colorArrayDefault;
    this.contentLoaded = false;
    // split({
    //   element: this.elements.title,
    //   expression: '<br>',
    // });

    // split({
    //   element: this.elements.title,
    //   expression: '<br>',
    // });

    // this.elements.titleSpans =
    //   this.elements.title.querySelectorAll('span span');

    this.length = 0;

    this.createLoader();
    this.timer = setTimeout(() => {
      this.cancelLoader();
    }, 5000);
  }

  createLoader() {
    each(this.elements.images, (element) => {
      element.onload = (_) => this.onAssetLoaded();
      element.src = element.getAttribute('data-src');
    });

    each(this.elements.videos, (element) => {
      element.onloadeddata = (_) => {
        this.onAssetLoaded();
      };
      element.poster = element.getAttribute('data-src');
    });

    each(this.elements.videoSources, (element) => {
      element.src = element.getAttribute('data-src');
      element.parentElement.load();
    });
  }

  cancelLoader() {
    console.log('loading cancelled');
    each(this.elements.images, (element) => {
      if (element.classList.contains('hero__gallery__media__image')) {
        element.src = '';
        element.style.display = 'none';

        // cycle through colors array
        // compare
        // pick one, set current as picked
        this.colorArrayNew = this.colorArrayNew.filter(
          (val) => val !== this.currentColor
        );

        if (this.colorArrayNew.length === 0) {
          this.colorArrayNew = this.colorArrayDefault;
        }

        const randomNum = Math.floor(Math.random() * this.colorArrayNew.length);

        element.parentElement.classList.add(this.colorArrayNew[randomNum]);
        this.currentColor = this.colorArrayNew[randomNum];
      }
    });
    this.onLoaded();
  }

  onAssetLoaded() {
    this.length += 1;
    const percent =
      this.length / (this.elements.images.length + this.elements.videos.length);
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`;
    if (percent === 1) {
      this.onLoaded();
    }
  }

  onLoaded() {
    if (this.contentLoaded) return;

    clearTimeout(this.timer);
    this.contentLoaded = true;
    this.loading = new Promise((resolve) => {
      this.animateOut = GSAP.timeline({ delay: 2 });

      // this.animateOut.to(this.elements.titleSpans, {
      //   duration: 1.5,
      //   ease: 'expo.out',
      //   stagger: 0.1,
      //   y: '100%',
      // });
      this.animateOut.call((_) => {
        // calls on Preloaded() in index.js, basically revealing the content and destroying the preloader
        this.emit('completed');
      });
      this.animateOut.to(
        this.elements.title,
        {
          duration: 1.5,
          ease: 'expo.out',
          autoAlpha: 0,
        },
        '-=1.4'
      );

      this.animateOut.to(
        this.elements.numberText,
        {
          duration: 1.5,
          ease: 'expo.out',
          stagger: 0.1,
          autoAlpha: 0,
        },
        '-=1.4'
      );

      this.animateOut.to(
        this.elements.circle,
        {
          duration: 1.5,
          ease: 'expo.out',
          stagger: 0.1,
          autoAlpha: 0,
        },
        '-=1.4'
      );

      this.animateOut.to(
        this.element,
        {
          duration: 1.5,
          ease: 'expo.out',
          scale: 0,
          // transformOrigin: '100% 100%',
        },
        '-=1'
      );
    });
  }

  loadSite() {}

  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}
