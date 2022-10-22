import Component from "../../../common/component";
import Card from "./Card";
import { IMovieData } from '../../../common/interfaces';

class CardField extends Component {
  cardList: Card[];

  constructor(parent: HTMLElement, data: IMovieData[]) {
    super(parent, 'div', 'card-field');
    this.cardList = [];

/*-----------------------Render default movie-----------------------*/

    data.forEach((movieData: IMovieData) => {
      const card = new Card(this.node, movieData);
      this.cardList.push(card);
    });
  }

  clearCardList() {
    this.cardList = [];
  }
}

export default CardField;
