import Component from "../../../common/component";

class SearchBlock {
  input: HTMLInputElement;
  value: string;
  form: HTMLFormElement;
  backBtn: Component;

  constructor() {
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.value = this.input.value;
  }

  render(parent: HTMLElement): void {
    const wrapper = new Component(parent, 'div', 'form-wrapper');
    const logoWrapper = new Component(wrapper.node, 'div', 'logo-wrapper');
    const img = new Component(logoWrapper.node, 'div', 'img');
    const logo = new Component(logoWrapper.node, 'h1', 'logo', 'Movie App');
    this.form.className = 'form';

    this.input.className = 'input';
    this.input.setAttribute('placeholder', 'Название фильма');
    this.input.setAttribute('autofocus', '');
    this.form.append(this.input);

    wrapper.node.append(this.form);

    this.backBtn = new Component(wrapper.node, 'button', 'additional-info__back-btn invisible', 'Назад');
    parent.append(wrapper.node);
  }

  getValue(): string {
    return this.input.value;
  }

  hideOrShow(btn: HTMLElement, input: HTMLInputElement) {
    if (btn.classList.contains('invisible')) {
      input.classList.remove('invisible');
    } else {
      input.classList.add('invisible');
    }
  }
}

export default SearchBlock;
