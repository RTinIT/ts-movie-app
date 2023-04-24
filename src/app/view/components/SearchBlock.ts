import Component from "../../../common/component";

class SearchBlock {
  public input: HTMLInputElement;
  public form: HTMLFormElement;

  constructor() {
    this.form = document.createElement('form');
    this.input = document.createElement('input');
  }

  public render(parent: HTMLElement): void {
    const wrapper = new Component(parent, 'div', 'form-wrapper');
    const logoWrapper = new Component(wrapper.node, 'div', 'logo-wrapper');
    const logo = new Component(logoWrapper.node, 'h1', 'logo', 'Movie App');
    logo.node.id = "logo";

    this.form.className = 'form';
    this.input.className = 'input';
    this.input.id = 'input';
    this.input.setAttribute("required", "");
  
    const inputWrapper = new Component(this.form, "div", "input-wrapper");
    inputWrapper.node.append(this.input);
    const label = new Component(inputWrapper.node, "label", "input-wrapper__label", "Поиск");
    label.node.setAttribute("for", "input");
    const underline = new Component(inputWrapper.node, "div", "input-wrapper__underline");
    this.form.append(inputWrapper.node);

    wrapper.node.append(this.form);

    parent.append(wrapper.node);
  }

  public getValue(): string {
    return this.input.value;
  }

  public clearInput () {
    this.input.value = "";
  }
}

export default SearchBlock;
