import MovieView from '../view/MovieView';
import MovieModel from '../model/MovieModel';
import { IResponseData } from '../../common/interfaces';

class MovieController {
  view: MovieView;
  model: MovieModel;
  choosedCard: {name: string, id: string};

  constructor() {
    this.view = new MovieView();
    this.model = new MovieModel();
    this.choosedCard = {name: '', id: ''};
  }

  init() {
    this.model.getData().then((data) => {
      this.view.start(data);
      this.setEventListeners(data);
    });
  }

  setEventListeners(data: IResponseData) {
    this.view.header.search.form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      this.searching();
    });
    this.view.cardField.cardList.forEach((e) => {
      e.node.addEventListener('click', (e: Event) => {
        document.body.classList.add("blocked");
        const form = this.view.header.search.form;
        this.recChoosedCard(e);
        this.getAdditionalInfo();
      });
    });
  }

  searching() {
    const value = this.view.header.search.getValue();
    this.model.getData(value).then((data) => {
      const input = this.view.header.search.input;
      this.view.update(data);
      this.setEventListeners(data);
    });
  }

  recChoosedCard(e: Event) {
    const clickedCard = e.currentTarget as HTMLElement;
    const id = clickedCard.dataset.filmid;
    const name = clickedCard.dataset.filmname;
    this.choosedCard.name = name;
    this.choosedCard.id = id;
  }

  getAdditionalInfo() {
    this.model.getDataByFilmId(this.choosedCard.id)
      .then((data) => {
        this.view.showModal(data);
      })
  }
}

export default MovieController;
