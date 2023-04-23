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

    const btn = new Component(this.node, "a", "scroll-to-top");
    const img = new Component(btn.node, "img", "");
    img.node.setAttribute("src", "/public/arrow-up.svg");

    btn.node.setAttribute("href", "#logo");
  }

  clearCardList() {
    this.cardList = [];
  }
}

export default CardField;
