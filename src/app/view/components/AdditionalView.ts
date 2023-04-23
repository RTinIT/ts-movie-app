import Component from '../../../common/component';
import { AdditionalDataType } from '../../../common/interfaces';
import { handler, isNull, staffHandler } from '../../../common/util';
import { Rating } from './Rating';
import MovieInfo from './MovieInfo';

class AdditionalView extends Component {
  constructor(parent: HTMLElement, data?: AdditionalDataType) {
    super(parent, 'div', 'additional-info');

/*                         Used data                        */
    const [filmData, staffData] = data;

/*                         Sections                        */
    const topSection = new Component(this.node, 'section', 'additional-info__top-section');

/*                         Set poster                        */
    const imgWrapper = new Component(topSection.node, 'div', 'top-section__img-wrapper');
    const img = new Component(imgWrapper.node, 'img', 'img-wrapper__img');
    img.node.setAttribute('src', `${filmData.posterUrl}`);

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
    this.makeRateBorder(ratingCount, ratingWrap.node)

/*                         Set movie description                        */
    const discription = new Component(textWrapper.node, 'p', 'text-wrapper__description', `${filmData.description ? filmData.description : ''}`);
  }

  makeRateBorder(rate: string, elem: HTMLElement) {
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

export default AdditionalView;
