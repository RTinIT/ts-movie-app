import Component from "../../../common/component";
import { IFrameMovieData } from '../../../common/interfaces';
import SliderItem from './SliderItem';

class Slider extends Component {
  prevBtn: Component;
  nextBtn: Component;
  start: number;
  step: number;
  content: Component;
  dataLength: number;

  constructor(parent: HTMLElement, data: IFrameMovieData) {
    super(parent, 'div', 'mid-section__slider');

    if (!data.total) this.destroy();

    this.start = 0;
    this.step = innerWidth > 830 ? 750 : 300;
    this.dataLength = data.total;
    this.content = new Component(this.node, 'div', 'slider__content');

    this.renderSliderItem(data);

    window.addEventListener('resize', () => {
      this.step = innerWidth > 830 ? 750 : 300;
    })

    this.prevBtn = new Component(this.node, 'button', 'slider__prev-btn');
    this.nextBtn = new Component(this.node, 'button', 'slider__next-btn');
    if (this.dataLength === 1) {
      this.prevBtn.node.classList.add('hidden');
      this.nextBtn.node.classList.add('hidden');
    }
    this.nextBtn.node.onclick = () => this.next();
    this.prevBtn.node.onclick = () => this.prev();
  }

  renderSliderItem(data: IFrameMovieData) {
    if (this.dataLength >= 10) {
      this.dataLength = 10;
      data.items.slice(0, 10).forEach((it) => {
        new SliderItem(this.content.node, it);
      })
    } else {
      data.items.forEach((it) => {
        new SliderItem(this.content.node, it);
      })
    }
  }

  next() {
    if (this.start !== -(this.dataLength * this.step - this.step)) {
      this.content.node.style.transform = `translate(${this.start - this.step}px)`;
      this.start = parseInt(this.content.node.style.transform.slice(10));
    } else {
      this.start = 0;
      this.content.node.style.transform = `translate(${this.start}px)`;
    }
  }

  prev() {
    if (this.start) {
      this.content.node.style.transform = `translate(${this.start + this.step}px)`;
      this.start = parseInt(this.content.node.style.transform.slice(10));
    } else {
      this.start = -(this.dataLength * this.step - this.step);
      this.content.node.style.transform = `translate(${this.start}px)`;
    }
  }
}

export default Slider;
