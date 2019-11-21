import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Show } from '../tv.models'
import { TvMazeService } from '../tv-maze.service'
import { BookmarksService } from '../../bookmarks/bookmarks.service'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  shows: Show[] = []
  bookMarks$ = this.bookmarkService.items$
  query = 'batman'
  searchForm: FormGroup

  constructor(
    private http: HttpClient,
    private tv: TvMazeService,
    private bookmarkService: BookmarksService<Show>,
    private fb: FormBuilder,
  ) {
    this.search('batman')
    const query = this.fb.control('superman')
    this.searchForm = this.fb.group({
      query,
    })
  }

  search(query: string) {
    this.tv.searchShows(query).subscribe(shows => (this.shows = shows))
  }
}
