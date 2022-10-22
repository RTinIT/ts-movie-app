import Component from "../../../common/component";
import { IMovieData } from "../../../common/interfaces";
import { handler, isNull, ratingHandler } from '../../../common/util';

class Card extends Component {
  data: IMovieData;

  constructor(parent: HTMLElement, data: IMovieData) {
    super(parent, 'div', 'card');

    this.data = data;
    this.node.setAttribute('data-filmid', `${data.filmId}`);
    
    if (this.data.nameRu) {
      this.render(data);
    } else {
      this.destroy();
    }
  }

  render(data: IMovieData, parent?: HTMLElement) {
    const rating = new Component(this.node, 'span', 'rating', `${isNull(data.rating)}`);
    ratingHandler(data.rating, rating.node);
    const img = new Component(this.node, 'div', 'card__img');
    img.node.style.backgroundImage = `url(${data.posterUrl})`;
    const btnMore = new Component(this.node, 'button', 'card__btn', 'Узнать больше');
  }
}

export default Card;
