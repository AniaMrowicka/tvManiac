import { Component, Input, OnInit } from '@angular/core'
import { Show } from '../../tv/tv.models'
import { BookmarksService } from '../bookmarks.service'

@Component({
  selector: 'tm-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss'],
})
export class BookmarkRemoveComponent implements OnInit {
  @Input() item: Show
  constructor(private bookmarkService: BookmarksService) {}

  ngOnInit() {}

  removeBookmark({ id }: Show): void {
    this.bookmarkService.remove(id)
  }

  isBookmark({ id }: Show): boolean {
    return this.bookmarkService.has(id)
  }
}
