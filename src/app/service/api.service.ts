import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../module/film';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = `https://swapi.dev/api/films`;

  constructor(private http: HttpClient) {}

  getFilmById(filmId: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${filmId}`);
  }

  getAllFilm(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
