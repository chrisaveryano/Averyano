import each from 'lodash/each';

export default class {
  constructor(scroll) {
    this.elementWrapper = document.querySelector('.home__services__wrapper');
    this.elements = document.querySelectorAll('.services__card');
    this.services = {
      artDirection: document.getElementById('art-direction'),
    };

    this.elementsBounds = [];
    this.boundsReady = false;
    this.createBounds();

    this.addEventListeners();
  }

  createBounds(scroll = 0) {
    each(this.elements, (el) => {
      const bounds = el.getBoundingClientRect();

      const obj = {
        left: bounds.left,
        top: bounds.top + window.pageYOffset + scroll,
      };
      this.elementsBounds.push(obj);
    });

    this.boundsReady = true;
  }

  addEventListeners() {
    // console.log('added listeners');
    // console.log(this.services.artDirection);
    // this.services.artDirection.addEventListener('mousemove', (e) => {
    //   console.log('ad');
    //   console.log(e.target);
    // });
  }

  onResize(scroll) {
    // reset bounds
    this.boundsReady = false;
    this.elementsBounds = [];
    this.createBounds(scroll);
  }

  update({ clientX, clientY }, current = 0) {
    if (!this.boundsReady) return;

    each(this.elements, (el, i) => {
      const x = clientX - this.elementsBounds[i].left;
      const y =
        current - this.elementsBounds[i].top + clientY + window.pageYOffset;

      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  }
}
