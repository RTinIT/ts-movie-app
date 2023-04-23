import { AdditionalDataType, IMovieData } from "../../common/interfaces";

class MovieModel {
  apiKey: string;
  defaultPage: string;
  searchUrl: string;
  searchByIdUrl: string;
  searchActors: string;
  movieFacts: string;
  video: string;
  frameMovie: string;
  headers: Record<string, string>;

  constructor() {
    this.apiKey = process.env.API_KEY;
    this.defaultPage = process.env.DEFAULT_PAGE;
    this.searchUrl = process.env.SEARCH_URL;
    this.searchByIdUrl = process.env.SEARCH_BY_ID_URL;
    this.searchActors = process.env.SEARCH_ACTORS;
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
      const resp = await fetch(this.defaultPage, {headers: this.headers});
      return resp.json();
    }
  }

  async getDataByFilmId(id: string): Promise<AdditionalDataType> {
    try {
      return Promise.all([
        await (await fetch(`${this.searchByIdUrl}${id}`, {headers: this.headers})).json(),
        await (await fetch(`${this.searchActors}${id}`, {headers: this.headers})).json(),
      ]);
    } catch (error) {
      console.log('Возникли проблемы', error.message);
    }
  }
}

export default MovieModel;
