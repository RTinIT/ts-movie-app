export interface IResponseData {
  countPage: number,
  films: IMovieData[],
}

export interface IMovieData {
  countries: IMovieContries[],
  filmId: number,
  filmLength?: string
  genres: IMovieGenre[],
  nameEn?: string,
  nameRu?: string,
  posterUrl: string,
  posterUrlPreview?: string,
  rating?: string,
  ratingChange?: string,
  ratingVoteCount?: number,
  year?: string,
}

export interface IMovieContries {
  country: string,
}

export interface IMovieGenre {
  genre: string,
}

export interface IFilmDataById {
  kinopoiskId: number,
  imdbId: string,
  nameRu?: string,
  nameEn?: string,
  nameOriginal?: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl?: string,
  logoUrl: string,
  reviewsCount: number,
  ratingGoodReview: number,
  ratingGoodReviewVoteCount: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingImdb?: number,
  ratingImdbVoteCount: number,
  ratingFilmCritics?: number,
  ratingFilmCriticsVoteCount: number,
  ratingAwait: number,
  ratingAwaitCount: number,
  ratingRfCritics: number,
  ratingRfCriticsVoteCount: number,
  webUrl: string,
  year?: string,
  filmLength: string,
  slogan: string,
  description?: string,
  shortDescription?: string,
  editorAnnotation?: string,
  isTicketsAvailable?: boolean,
  productionStatus?: string,
  type: string,
  ratingMpaa?: string,
  ratingAgeLimits: string,
  countries: IMovieContries[],
  genres: IMovieGenre[],
  startYear: number,
  endYear: number,
  serial: boolean,
  shortFilm: boolean,
  completed: boolean,
  hasImax: boolean,
  has3D: boolean,
  lastSync: string
}

export interface IStaffData {
  staffId: string,
  nameRu: string,
  nameEn: string,
  description?: string,
  posterUrl: string,
  professionText: string,
  professionKey: string
}

export interface IFactsData {
  total: number,
  items: [
    {
      text: string,
      type: string,
      spoiler: boolean
    }
  ]
}

export interface IVideoData {
  total: number,
  items: IItemVideoData[]
}

export interface IItemVideoData {
  url: string,
  name: string,
  site: string
}

export type AdditionalDataType = [
  IFilmDataById,
  IStaffData[],
  IFactsData,
  IFrameMovieData,
  IVideoData
]

export interface IAdditionalData {
  filmData: IFilmDataById,
  staffData: IStaffData[],
  factsData: IFactsData,
  frameData: IFrameMovieData,
  videoData: IVideoData
}
 

export interface IFrameMovieData {
  total: number,
  totalPages: number,
  items: IItemFromFrameMovie[]
}

export interface IItemFromFrameMovie {
  imageUrl: string,
  previewUrl: string,
}
