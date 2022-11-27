import Component from 'classes/Component';
import each from 'lodash/each';

export default class Animation extends Component {
  constructor({ element, elements }) {
    super({
      element,
      elements,
    });

    this.createObserver();

    this.animateOut();
  }

  createObserver() {
    // Special Observer for menu links
    if (Object.keys(this.elements).length > 0) {
      this.observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateIn(entry.target);
            } else {
              this.animateOut(entry.target);
            }
          });
        },
        { root: null, threshold: 0.2 }
      );
      each(this.elements, (el) => {
        this.observer.observe(el);
      });
      return;
    }

    // Observer for everything else
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn(entry.target);
        } else {
          this.animateOut(entry.target);
        }
      });
    });

    // if (typeof this.element === 'array') {
    //   console.log('Array');
    // }
    this.observer.observe(this.element);
  }

  animateIn() {}

  animateOut() {}
}
