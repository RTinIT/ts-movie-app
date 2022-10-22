import Component from "../../../common/component";
import { IItemFromFrameMovie } from '../../../common/interfaces';

class SliderItem extends Component {
  constructor(parent: HTMLElement, data: IItemFromFrameMovie) {
    super(parent, 'div', 'slider__item');

    const img = new Component(this.node, 'img', 'slider-item__img');
    img.node.setAttribute('src', `${data.imageUrl}`);
  }
}

export default SliderItem;
