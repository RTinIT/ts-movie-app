import { IMovieContries, IMovieGenre, IStaffData } from './interfaces';

export function handler(arr?: IMovieGenre[] | IMovieContries[]): string {
  return arr.map((e) => Object.values(e)).slice(0,3).join(', ');
}

export function isNull(value: string): string {
  return value !== 'null' ? value : '-';
}

export function staffHandler(staffList: IStaffData[], profession: string) {
  if (profession === 'DIRECTOR') {
    const directors = staffList.filter((staff) => staff.professionKey === profession);
    return directors.map((director) => director.nameRu).join(', ');
  } else {
    const actors = staffList.filter((staff) => staff.professionKey === profession).slice(0, 5);
    return actors.map((actor) => actor.nameRu).join(', ');
  }
}

export function ratingHandler(value: string, elem: HTMLElement): void {
  if (value && value !== 'null') {
    if (+value > 7) {
      elem.style.color = '#2cb52c';
      elem.style.border = '2px solid #2cb52c';
    } else {
      elem.style.color = 'orange';
      elem.style.border = '2px solid orange';
    }
  }
}