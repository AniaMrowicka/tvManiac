import { Directive, HostBinding, Input } from '@angular/core'
import { Bookmark } from './bookmarks.models'
import { BookmarksService } from './bookmarks.service'

@Directive({
  selector: '[tmBookmarked]',
})
export class BookmarkedDirective {
  @Input() item: Bookmark
  constructor(private bs: BookmarksService) {}
  @HostBinding('class.bookmarked')
  get isBookmarked() {
    return this.bs.has(this.item.id)
  }
}
