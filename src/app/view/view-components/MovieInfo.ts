import Component from "../../../common/component";
import { IFilmDataById, IStaffData } from "../../../common/interfaces";

class MovieInfo extends Component {
  constructor(parent: HTMLElement, title: string, data: string) {
    super(parent, 'p', 'text-wrapper__item');

    const infoName = new Component(this.node, 'span', 'item__content', `${title}:`);
    const infoList = new Component(this.node, 'span', 'item__content', `${data}`);
  }
}

export default MovieInfo;
