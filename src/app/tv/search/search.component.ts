import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Show } from '../tv.models'
import { TvMazeService } from '../tv-maze.service'
import { BookmarksService } from '../../bookmarks/bookmarks.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators'
import { log } from 'util'

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
    const query = this.fb.control('superman', [Validators.required, Validators.minLength(3)])
    this.searchForm = this.fb.group({
      query,
    })
    // this.searchForm.valueChanges.subscribe(v => v.query);
    // this.searchForm.controls.query.value
    // this.searchForm.get('query')
    // this.searchForm.get(['adress', 4]);
    this.searchForm.valueChanges
      .pipe(
        map(v => v.query),
        tap(v => console.log(this.searchForm.get('query').errors)),
        filter(() => this.searchForm.valid),
        debounceTime(200),
        distinctUntilChanged(),
      )
      .subscribe(this.search)
  }

  search = (query: string) => {
    console.log(this)
    this.tv.searchShows(query).subscribe(shows => (this.shows = shows))
  }
}
