import { AdditionalDataType, IMovieData } from "../../common/interfaces";

class MovieModel {
  apiKey: string;
  defaltPage: string;
  searchUrl: string;
  searchByIdUrl: string;
  searchActors: string;
  movieFacts: string;
  video: string;
  frameMovie: string;
  headers: Record<string, string>;

  constructor() {
    this.apiKey = '1a5db326-08fe-414f-8a22-62e0e9615e74';
    this.defaltPage = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
    this.searchUrl = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
    this.searchByIdUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
    this.searchActors = 'https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=';
    this.movieFacts = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
    this.frameMovie = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
    this.video = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
    this.headers = {
      "Content-Type": "application/json",
      "X-API-KEY": this.apiKey,
    }
  }

  async getData(value?: string): Promise<{countPage: number, films: IMovieData[]}> {
    if (value) {
      const resp = await fetch(`${this.searchUrl}${value}`, {headers: this.headers});
      return resp.json();
    } else {
      const resp = await fetch(this.defaltPage, {headers: this.headers});
      return resp.json();
    }
  }

  async getDataByFilmId(id: string): Promise<AdditionalDataType> {
    try {
      return Promise.all([
        await (await fetch(`${this.searchByIdUrl}${id}`, {headers: this.headers})).json(),
        await (await fetch(`${this.searchActors}${id}`, {headers: this.headers})).json(),
        await (await fetch(`${this.movieFacts}${id}/facts`, {headers: this.headers})).json(),
        await (await fetch(`${this.frameMovie}${id}/images?type=STILL&page=1`, {headers: this.headers})).json(),
        await (await fetch(`${this.video}${id}/videos`, {headers: this.headers})).json(),
      ]);
    } catch (error) {
      console.log('Возникли проблемы', error.message);
    }
  }
}

export default MovieModel;
