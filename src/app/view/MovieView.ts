import Component from '../../common/component';
import { DetailsDataType, IResponseData } from '../../common/interfaces';
import CardField from './components/CardField';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from "./components/Modal";

class MovieView {
  public root: Component;
  public header: Header;
  public main: Main;
  public cardField: CardField;
  public cardFieldWrapper: Component;
  public modal: Modal;

  public start(data: IResponseData): void {
    this.root = new Component(document.body, 'div', 'root');
    this.header = new Header(this.root.node);
    this.main = new Main(this.root.node, data);
    // this.cardFieldWrapper = new Component(this.root.node, 'div', 'card-field-wrapper');
    // this.cardField = new CardField(this.cardFieldWrapper.node, data.films);
    const footer = new Footer(this.root.node);
  }

  public update(data: IResponseData): void {
    this.main.cardField.destroy();
    this.main.cardField = new CardField(this.main.cardFieldWrapper.node, data.films);
  }

  public showModal(data: DetailsDataType) {
    this.modal = new Modal(this.root.node, data);
  }
}

export default MovieView;
