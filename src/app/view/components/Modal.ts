import Component from "../../../common/component";
import { DetailsDataType } from "../../../common/interfaces";
import Details from "./Details";

class Modal extends Component {
  private data: DetailsDataType;
  private detailsInfo: Details;
  

  constructor(parent: HTMLElement, data: DetailsDataType) {
    super(parent, "div", "modal");
    this.data = data;

   
    this.detailsInfo = new Details(this.node, this.hide.bind(this), data);
  }

  public hide() {
    document.body.classList.remove("blocked");
    this.node.classList.add("exit");
  
    setTimeout(() => {
      this.destroy();
    }, 200)
  }
}

export default Modal;
