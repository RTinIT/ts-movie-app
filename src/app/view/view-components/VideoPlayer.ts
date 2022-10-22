import Component from '../../../common/component';
import { IVideoData } from '../../../common/interfaces';

class VideoPlayer extends Component {
  constructor(parent: HTMLElement, data: IVideoData) {
    super(parent, 'div', 'bot-section__player');

    if (!data.total || this.filterByYT(data).length === 0) {
      this.destroy()
    } else {
      const title = new Component(this.node, 'h3', 'player__title', 'Смотреть трейлер');
      const video = new Component(this.node, 'iframe', 'video');
      // video.node.setAttribute('width', '750');
      // video.node.setAttribute('height', '400');
      video.node.setAttribute('src', `${this.urlHandle(data)}`);
      video.node.setAttribute('title', 'YouTube video player');
      video.node.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      video.node.setAttribute('allowfullscreen', '');
    }
  }

  urlHandle(data: IVideoData) {
    const path = this.filterByYT(data)[0].url.split('/');
    return `https://www.youtube.com/embed/${path.slice(-1)}`;
  }

  filterByYT(data: IVideoData) {
    return  data.items.filter((src) => src.site === 'YOUTUBE');
  }
}

export default VideoPlayer;
