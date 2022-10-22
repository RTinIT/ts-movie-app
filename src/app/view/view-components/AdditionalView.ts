import Component from '../../../common/component';
import { AdditionalDataType } from '../../../common/interfaces';
import { handler, staffHandler } from '../../../common/util';
import { Rating } from './Rating';
import Facts from './Facts';
import Slider from './Slider';
import VideoPlayer from './VideoPlayer';
import MovieInfo from './MovieInfo';


class AdditionalView extends Component {
  constructor(parent: HTMLElement, data?: AdditionalDataType) {
    super(parent, 'div', 'additional-info');

/*                         Used data                        */
    const [filmData, staffData, factsData, frameMovie, videoData] = data;

/*                         Sections                        */
    const topSection = new Component(this.node, 'section', 'additional-info__top-section');
    const midSection = new Component(this.node, 'section', 'additional-info__mid-section');
    const botSection = new Component(this.node, 'section', 'additional-info__bot-section');

/*                         Check necessity render bot section                        */
    if (!factsData.total && !this.hasVideoData(data)) {
      botSection.destroy();
    }

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
    const ratingNum = new Component(rating.node, 'div', 'rating__count', `${filmData.ratingKinopoisk}`);


/*                         Set movie description                        */
    const discriptionTitle = new Component(midSection.node, 'h3', 'mid-section__text-title', 'Краткое описание')
    const discription = new Component(midSection.node, 'p', 'mid-section__text', `${filmData.description ? filmData.description : ''}`);

/*                         Set movie images slider                        */
    const slider = new Slider(midSection.node, frameMovie);

/*                         Set movie traler                        */
    const player = new VideoPlayer(botSection.node, videoData);

/*                         Set movie facts                        */
    const facts = new Facts(botSection.node, factsData);
  }

  hasVideoData(data: AdditionalDataType) {
    const videoData = data[4];
    const res = videoData.items.filter((it) => it.site === 'YOUTUBE');
    return res.length !== 0;
  }
}

export default AdditionalView;
