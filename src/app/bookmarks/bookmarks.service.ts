import { Injectable } from '@angular/core'
import { Bookmark, BookmarkId } from './bookmarks.models'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  private items: Bookmark[] = []
  // tslint:disable-next-line:variable-name
  private _items$ = new BehaviorSubject<Bookmark[]>([])
  items$ = this._items$.asObservable()

  constructor() {}

  add(item: Bookmark): void {
    this.update([...this.items, item])
  }

  remove(id: BookmarkId): void {
    this.update(this.items.filter(item => item.id !== id))
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id)
  }
  private update(item: Bookmark[]) {
    this.items = item
    this._items$.next(item)
  }
}
