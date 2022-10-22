import MovieView from '../view/MovieView';
import MovieModel from '../model/MovieModel';
import { AdditionalDataType, IResponseData } from '../../common/interfaces';

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
/*             Render default page          */
    this.model.getData().then((data) => {
      this.view.start(data);
      this.setEventListeners(data);
    });
  }

  setEventListeners(data: IResponseData) {
    this.view.search.form.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      this.searching();
    });
    this.view.search.backBtn.node.addEventListener('click', () => {
      const btnBack = this.view.search.backBtn.node;
      const form = this.view.search.form;
      this.view.additionalView.destroy();
      this.view.update(data);
      this.setEventListeners(data);
      btnBack.classList.add('invisible');
      form.classList.remove('invisible');
      this.view.cardField.clearCardList();
    });
    this.view.cardField.cardList.forEach((e) => {
      e.node.addEventListener('click', (e: Event) => {
        const form = this.view.search.form;
        const btnBack = this.view.search.backBtn.node;
        this.recChoosedCard(e);
        this.getAdditionalInfo();
        form.classList.add('invisible');
        btnBack.classList.remove('invisible');
      });
    });
  }

  searching() {
    const value = this.view.search.getValue();
    this.model.getData(value).then((data) => {
      const btnBack = this.view.search.backBtn.node;
      const input = this.view.search.input;
      this.view.update(data);
      this.setEventListeners(data);
      this.view.search.hideOrShow(btnBack, input);
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
        this.view.renderAdditionalView(this.view.cardFieldWrapper.node, data);
      })
  }
}

export default MovieController;
