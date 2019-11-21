import { Component, Input, OnInit } from '@angular/core'
import { Show } from '../../tv/tv.models'
import { BookmarksService } from '../bookmarks.service'

@Component({
  selector: 'tm-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss'],
})
export class BookmarkAddComponent implements OnInit {
  @Input() item: Show
  constructor(private bookmarkService: BookmarksService) {}

  ngOnInit() {}

  saveBookmark(item: Show): void {
    this.bookmarkService.add(item)
  }

  isBookmark({ id }: Show): boolean {
    return this.bookmarkService.has(id)
  }
}
