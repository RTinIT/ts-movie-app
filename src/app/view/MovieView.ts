import Component from '../../common/component';
import { AdditionalDataType, IResponseData } from '../../common/interfaces';
import CardField from './components/CardField';
import Header from './components/Header';
import AdditionalView from './components/AdditionalView';
import Footer from './components/Footer';
import Modal from "./components/Modal";

class MovieView {
  root: Component;
  header: Header;
  cardField: CardField;
  cardFieldWrapper: Component;
  additionalView: Component;
  modal: Modal;

  start(data: IResponseData): void {
    this.root = new Component(document.body, 'div', 'root');
    this.header = new Header(this.root.node);
    this.cardFieldWrapper = new Component(this.root.node, 'div', 'card-field-wrapper');
    this.cardField = new CardField(this.cardFieldWrapper.node, data.films);
    const footer = new Footer(this.root.node);
  }

  update(data: IResponseData): void {
    this.cardField.destroy();
    this.cardField = new CardField(this.cardFieldWrapper.node, data.films);
  }

  renderAdditionalView(parent: HTMLElement, data: AdditionalDataType) {
    this.cardField.destroy();
    this.additionalView = new AdditionalView(parent, data);
    window.scrollTo({ top: 0 });
  }

  showModal(data: AdditionalDataType) {
    this.modal = new Modal(this.root.node, data);
  }
}

export default MovieView;
