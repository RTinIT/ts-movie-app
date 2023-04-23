import Component from '../../../common/component';

class Footer extends Component {
  constructor(parent: HTMLElement) {
    super(parent, 'footer', 'footer');

    const content = new Component(this.node, 'div', 'footer__content');
    const github = new Component(content.node, 'a', 'content__item', 'my_github');
    github.node.setAttribute('href', 'https://github.com/RTinIT');

    const year = new Component(content.node, 'p', 'content__item', `© 2022`);
  }
}

export default Footer;
