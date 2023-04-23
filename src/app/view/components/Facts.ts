import Component from "../../../common/component";
import { IFactsData } from '../../../common/interfaces';

class Facts extends Component {
  facts: string[];

  constructor(parent: HTMLElement, data: IFactsData) {
    super(parent, 'ol', 'bot-section__facts-list');

    if (!data.total) this.destroy();

    this.facts = data.items.map((it) => it.text);
    const factsDetails = new Component(this.node, 'details', 'facts-list__details');
    const title = new Component(factsDetails.node, 'summary', '', 'Интересные факты');
    this.renderFacts(factsDetails.node);
  }

  renderFacts(parent: HTMLElement) {
    this.facts.forEach((it) => {
      new Component(parent, 'li', 'facts-list__item', `${it}`);
    })
  }
}

export default Facts;
