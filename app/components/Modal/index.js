import GSAP from 'gsap';
import Component from '../../classes/Component';
import { calculate, split } from '../../utils/text';

export default class Modal extends Component {
  constructor() {
    super({
      element: '.loader',
    });

    this.isCreating = false;
    // this.createModal();
  }
  create() {
    if (!this.isCreating) {
      this.isCreating = true;
      this.createModal();
    }
  }
  createModal() {
    this.loader = document.createElement('DIV');
    document.body.insertBefore(this.loader, document.querySelector('content'));
    this.loader.classList.add('loader');

    this.textContainer = document.createElement('DIV');
    this.textContainer.classList.add('loader__container');
    this.loader.appendChild(this.textContainer);

    const htmlCode = `<p class="loader__text">This is an early version of this website. The website is fully open-source! You can find the source code on my <a class="footer__list__link" href='https://github.com/chrisaveryano' target="_blank">Github</a>. If you'd like me to develop a website for you, make sure to connect via email <a class="footer__list__link" target="_blank" href="mailto:chris@averyano.com">chris@averyano.com</a></p>
    <br>
    - Chris Averyano`;
    this.textContainer.insertAdjacentHTML('afterbegin', htmlCode);

    this.loaderCross = document.createElement('A');
    this.loaderCross.classList.add('loader__cross');
    this.loaderCross.textContent = 'X';
    this.loaderCross.addEventListener('click', (e) => {
      e.preventDefault();
      this.hideModal();
    });

    this.textContainer.appendChild(this.loaderCross);

    const tempTimer = setTimeout((e) => {
      this.showModal();
      clearTimeout(tempTimer);
    }, 100);
  }

  showModal() {
    this.loader.addEventListener(
      'transitionend',
      (e) => {
        GSAP.fromTo(
          this.textContainer,
          {
            autoAlpha: 0,
            y: '100%',
          },
          {
            // delay: 1 * 0.2,
            autoAlpha: 1,
            duration: 1,
            ease: 'expo.out',
            stagger: {
              amount: 0.5,
              axis: 'x',
            },
            y: '0%',
          }
        );
      },
      true
    );
    this.loader.style.transform = `translate(0%, 0%)`;
  }
  hideModal() {
    this.timelineIn = GSAP.timeline({
      onComplete: (_) => {},
    });
    this.timelineIn.fromTo(
      this.textContainer,
      {
        autoAlpha: 1,
        x: '0%',
      },
      {
        // delay: 1 * 0.2,
        autoAlpha: 0,
        duration: 1,
        ease: 'expo.out',
        stagger: {
          amount: 0.5,
          axis: 'x',
        },
        x: '100%',
      },
      0
    );

    this.loader.addEventListener(
      'transitionend',
      () => {
        this.isCreating = false;
        this.loader.remove();
      },
      true
    );
    this.loader.style.transform = `translate(100%, 0%)`;
  }
}
