import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Show } from '../tv.models'
import { TvMazeService } from '../tv-maze.service'
import { BookmarksService } from '../../bookmarks/bookmarks.service'

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  shows: Show[] = []
  bookMarks$ = this.bookmarkService.items$
  query = 'batman'

  constructor(
    private http: HttpClient,
    private tv: TvMazeService,
    private bookmarkService: BookmarksService<Show>,
  ) {
    this.search('batman')
    // this.bookmarkService.items$.subscribe(data => (this.bookMarks = data as Show[]))
  }

  search(query: string) {
    this.tv.searchShows(query).subscribe(shows => (this.shows = shows))
  }
}
