import Component from '../../../classes/Component';
import Circle from '../../../components/Circle';
import each from 'lodash/each';
// import { split } from 'utils/text';

export default class Contact extends Component {
  constructor() {
    super({
      element: '.home__contact',
      elements: {
        button: '.home__contact__button',
        text: '.home__contact__button__text',
      },
    });
    this.scale = 1;
    this.createContact();
  }

  createContact() {
    this.circle = new Circle({
      elementContainer: this.element,
      element: this.elements.button,
      scale: this.scale,
    });
  }

  addEventListeners() {
    this.element.addEventListener('mouseenter', (_) => {
      this.elements.button.style.transform = `translate(0, 0) rotate(254deg) scale(${this.scale})`;
    });
    this.element.addEventListener('mouseleave', (_) => {
      this.elements.button.style.transform = `translate(0, 0) rotate(254deg) scale(${this.scale})`;
    });
  }

  removeEventListeners() {}
}
