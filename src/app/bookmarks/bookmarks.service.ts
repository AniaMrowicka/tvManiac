import { Injectable } from '@angular/core'
import { Bookmark, BookmarkId } from './bookmarks.models'
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { log } from 'util'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class BookmarksService<T extends Bookmark = Bookmark> {
  private items: T[] = []
  // tslint:disable-next-line:variable-name
  private _items$ = new BehaviorSubject<T[]>([])
  items$ = this._items$.asObservable()
  private readonly url = 'http://localhost:3000/bookmarks'

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(bookmarks => this.update)
  }

  add(item: T): void {
    this.http
      .post(this.url, item)
      .pipe(map(() => [...this.items, item]))
      .subscribe(this.update)
  }

  remove(id: BookmarkId): void {
    this.http
      .delete(`${this.url}/${id}`)
      .pipe(map(() => this.items.filter(item => item.id !== id)))
      .subscribe(this.update)
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id)
  }
  private update = (item: T[]) => {
    this.items = item
    this._items$.next(item)
  }
}
