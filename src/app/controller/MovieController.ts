import MovieView from '../view/MovieView';
import MovieModel from '../model/MovieModel';
import { IResponseData } from '../../common/interfaces';
import { SelectedCard } from '../../common/interfaces';

class MovieController {
  private view: MovieView;
  private model: MovieModel;
  private selectedCard: SelectedCard;

  constructor() {
    this.view = new MovieView();
    this.model = new MovieModel();
    this.selectedCard = {name: '', id: ''};
  }

  init() {
    this.model.getData().then((data) => {
      this.view.start(data);
      this.setEventListeners(data);
    });
  }

  private setEventListeners(data: IResponseData) {
    this.view.header.search.form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      this.searching();
    });
    this.view.main.cardField.cardList.forEach((e) => {
      e.node.addEventListener('click', (e: Event) => {
        document.body.classList.add("blocked");
        this.saveSelectedCard(e);
        this.getAdditionalInfo();
      });
    });
  }

  private searching() {
    const value = this.view.header.search.getValue();
    this.model.getData(value).then((data) => {
      this.view.main.setTitle(`Результаты поиска: ${value}`);
      this.view.header.search.clearInput();
      this.view.update(data);
      this.setEventListeners(data);
    });
  }

  private saveSelectedCard(e: Event) {
    const clickedCard = e.currentTarget as HTMLElement;
    const id = clickedCard.dataset.filmid;
    const name = clickedCard.dataset.filmname;
    this.selectedCard.name = name;
    this.selectedCard.id = id;
  }

  private getAdditionalInfo() {
    this.model.getDataByFilmId(this.selectedCard.id)
      .then((data) => {
        this.view.showModal(data);
      })
  }
}

export default MovieController;
