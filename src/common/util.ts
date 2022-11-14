import { IMovieContries, IMovieGenre, IStaffData } from './interfaces';

export function handler(arr?: IMovieGenre[] | IMovieContries[]): string {
  return arr.map((e) => Object.values(e)).slice(0,3).join(', ');
}

export function isNull(value: number): string {
  return `${value}` !== 'null' ? `${value}` : '-';
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
