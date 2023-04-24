import { AdditionalDataType, IMovieData } from "../../common/interfaces";

class MovieModel {
  private apiKey: string;
  private defaultPage: string;
  private searchUrl: string;
  private searchByIdUrl: string;
  private searchActors: string;
  private headers: Record<string, string>;

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

  public async getData(value?: string): Promise<{countPage: number, films: IMovieData[]}> {
    if (value) {
      const resp = await fetch(`${this.searchUrl}${value}`, {headers: this.headers});
      return resp.json();
    } else {
      const resp = await fetch(this.defaultPage, {headers: this.headers});
      return resp.json();
    }
  }

  public async getDataByFilmId(id: string): Promise<AdditionalDataType> {
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
