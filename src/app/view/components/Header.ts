import Component from "../../../common/component";
import SearchBlock from './SearchBlock';

class Header extends Component {
  search: SearchBlock;

  constructor(parent: HTMLElement) {
    super(parent, 'header', 'header');

    this.search = new SearchBlock();
    this.search.render(this.node);
  }
}

export default Header;
