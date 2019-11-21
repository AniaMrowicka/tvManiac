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
export class SearchComponent implements OnInit {
  shows: Show[] = []
  query = 'batman'

  constructor(
    private http: HttpClient,
    private tv: TvMazeService,
    private bookmarkService: BookmarksService,
  ) {
    this.search('batman')
  }

  ngOnInit() {}

  search(query: string) {
    this.tv.searchShows(query).subscribe(shows => (this.shows = shows))
  }

  saveBookmark(show: Show) {
    this.bookmarkService.add(show)
  }
  get allBookmarks(): Show[] {
    console.count()
    return this.bookmarkService.getAll() as Show[]
  }
}
