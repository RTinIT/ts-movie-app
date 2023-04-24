import Component from "../../../common/component";
import CardField from "./CardField"
import { IResponseData } from "../../../common/interfaces";

class Main extends Component {
  public title: Component;
  public cardField: CardField;
  public cardFieldWrapper: Component;

  constructor(parent: HTMLElement, data: IResponseData) {
    super(parent, 'main', 'main');

    this.title = new Component(this.node, "h2", "main__title", "Топ популярных фильмов:");
    this.cardFieldWrapper = new Component(this.node, 'div', 'card-field-wrapper');
    this.cardField = new CardField(this.cardFieldWrapper.node, data.films);
  }

  public setTitle(text: string) {
    this.title.node.textContent = text;
  }
}

export default Main;
