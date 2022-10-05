export default class Image {
  constructor({ image, x, y, width, height, maxY, i }) {
    this.element = image.parentElement;
    this.startX = x;
    this.startY = y;

    this.width = width;
    this.height = height;

    this.maxY = maxY;
    this.index = i;
  }

  create() {
    this.element.style.position = 'absolute';
    // this.element.style.width = `${this.width}px`;
    // this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.startX}px`;
    this.element.style.top = `${this.startY}px`;
    // this.element.style.transform = `translate(${(this.startX, this.startY)})`;
  }

  update() {}
}
