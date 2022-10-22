import Component from '../../common/component';
import { AdditionalDataType, IResponseData } from '../../common/interfaces';
import CardField from './view-components/CardField';
import SearchBlock from './view-components/SearchBlock';
import AdditionalView from './view-components/AdditionalView';
import Footer from './view-components/Footer';

class MovieView {
  root: Component;
  search: SearchBlock;
  cardField: CardField;
  cardFieldWrapper: Component;
  additionalView: Component;

  constructor() {
    this.search = new SearchBlock();
  }

  start(data: IResponseData): void {
    this.root = new Component(document.body, 'div', 'root');
    this.search.render(this.root.node);
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
}

export default MovieView;
