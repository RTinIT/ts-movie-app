import Component from '../../../common/component';
import { DetailsDataType } from '../../../common/interfaces';
import { handler, isNull, staffHandler } from '../../../common/util';
import { Rating } from './Rating';
import MovieInfo from './MovieInfo';

class Details extends Component {
  constructor(parent: HTMLElement, closeModal: () => void, data?: DetailsDataType) {
    super(parent, 'div', 'details');

/*                         Used data                        */
    const [filmData, staffData] = data;

/*                         Section                        */
    const topSection = new Component(this.node, 'section', 'details__top-section');

    const closeBtn = new Component(topSection.node, "div", "close-btn");
    closeBtn.node.onclick = () => closeModal();
    const line1 = new Component(closeBtn.node, "span", "");
    const line2 = new Component(closeBtn.node, "span", "");

/*                         Set poster                        */
    const imgWrapper = new Component(topSection.node, 'div', 'top-section__img-wrapper');
    const img = new Component(imgWrapper.node, 'img', 'img-wrapper__img');
    img.node.setAttribute('src', `${filmData.posterUrl}`);
    img.node.setAttribute('alt', `Постер ${filmData.nameRu ? filmData.nameRu : filmData.nameEn}`);

/*                         Set movie info                        */
    const textWrapper = new Component(topSection.node, 'div', 'top-section__text-wrapper');
    const title = new Component(textWrapper.node, 'h2', 'text-wrapper__title', `${filmData.nameRu}`);
    const genre = new MovieInfo(textWrapper.node, 'Жанр', `${handler(filmData.genres)}`);
    const country = new MovieInfo(textWrapper.node, 'Страна', `${handler(filmData.countries)}`);
    const year = new MovieInfo(textWrapper.node, 'Год выпуска', `${filmData.year ? filmData.year : '-'}`);
    const direсtors = new MovieInfo(textWrapper.node, 'Режисёры', `${staffHandler(staffData, 'DIRECTOR')}`);
    const actors = new MovieInfo(textWrapper.node, 'В ролях', `${staffHandler(staffData, 'ACTOR')}`);

    const rating = new Rating(textWrapper.node, filmData.ratingKinopoisk);
    const ratingCount = isNull(filmData.ratingKinopoisk);
    const ratingWrap = new Component(rating.node, 'div', 'rating__count', ratingCount);
    this.setBorder(ratingCount, ratingWrap.node)

/*                         Set movie description                        */
    const discription = new Component(textWrapper.node, 'p', 'text-wrapper__description', `${filmData.description ? filmData.description : ''}`);
  }

  private setBorder(rate: string, elem: HTMLElement) {
    if (isNaN(+rate)) {
        elem.classList.add('empty-rate')
    }

    if (+rate >= 7) {
        elem.classList.add('high-rate')
    }

    if (+rate < 7) {
        elem.classList.add('low-rate')
    }
  }
}

export default Details;
