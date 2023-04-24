import Component from '../../../common/component';
import { svgEmptyStar, svgHalfStar, svgStar, drawStar } from '../../../common/drawStar';

export class Rating extends Component {
  constructor(parent: HTMLElement, data: number) {
    super(parent, 'div', 'text-wrapper__item');

    const countStar = 10;
    const countFilledStar = Math.floor(data);
    const countHalfStar = Math.round((data - countFilledStar) * 100);
    const emptyStar = countStar - Math.ceil(data);

    const title = new Component(this.node, 'p', 'rating__title', 'Рейтинг: ');

    const starsWrapper = new Component(this.node, 'div', 'rating__stars');
    const svgMasks = new Component(starsWrapper.node, 'div', 'rating__svg-masks', drawStar(countHalfStar));
    const svgStarContainer = new Component(starsWrapper.node, 'div', 'rating__svg-stars');

    for (let i = 0; i < countFilledStar; i++) {
      svgStarContainer.node.innerHTML += svgStar;
    }

    if (countHalfStar) {
      svgStarContainer.node.innerHTML += svgHalfStar;
    }
    
    for (let i = 0; i < emptyStar; i++) {
      svgStarContainer.node.innerHTML += svgEmptyStar;
    }
  }
}