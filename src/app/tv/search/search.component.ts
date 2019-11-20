import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Show, ShowResponse } from '../tv.models'
import { map } from 'rxjs/operators'

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  shows: Show[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search(queryRef: string) {
    const url = `https://api.tvmaze.com/search/shows?q=${queryRef}`
    this.http
      .get<ShowResponse[]>(url)
      .pipe(map(showsResponses => showsResponses.map(({ show }) => show)))
      .subscribe(shows => (this.shows = shows))
  }
}
