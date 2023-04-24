import Component from "../../../common/component";
import { DetailsDataType } from "../../../common/interfaces";
import Details from "./Details";

class Modal extends Component {
  private data: DetailsDataType;
  private detailsInfo: Details;
  private closeBtn: Component;
  private line1: Component;
  private line2: Component;
  private closeImg: Component;

  constructor(parent: HTMLElement, data: DetailsDataType) {
    super(parent, "div", "modal");
    this.data = data;

    this.closeBtn = new Component(this.node, "div", "modal__close-btn");
    this.closeBtn.node.onclick = () => this.hide();
    this.line1 = new Component(this.closeBtn.node, "span", "");
    this.line2 = new Component(this.closeBtn.node, "span", "");
    this.detailsInfo = new Details(this.node, data);
  }

  private hide() {
    document.body.classList.remove("blocked");
    this.node.classList.add("exit");
  
    setTimeout(() => {
      this.destroy();
    }, 200)
  }
}

export default Modal;
