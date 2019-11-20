import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Show, ShowResponse } from './tv.models'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TvMazeService {
  baseUrl = 'https://api.tvmaze.com'
  constructor(private http: HttpClient) {}
  searchShows(query: string): Observable<Show[]> {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    return this.http
      .get<ShowResponse[]>(url)
      .pipe(map(showsResponses => showsResponses.map(({ show }) => show)))
  }
  getShow(id: string): Observable<Show> {
    const url = `${this.baseUrl}/shows/${id}?embed=episodes`
    return this.http.get<Show>(url)
  }
}
