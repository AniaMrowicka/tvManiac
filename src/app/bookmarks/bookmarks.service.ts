import { Injectable } from '@angular/core'
import { Bookmark, BookmarkId } from './bookmarks.models'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Store } from '@ngrx/store'
import { State } from '../store/reducers'
import { bookmarkAdd, bookmarkRemove } from '../store/actions/bookmarks.actions'

@Injectable({
  providedIn: 'root',
})
export class BookmarksService<T extends Bookmark = Bookmark> {
  private items: T[] = []
  // tslint:disable-next-line:variable-name
  private _items$ = new BehaviorSubject<T[]>([])
  items$ = this._items$.asObservable()
  private readonly url = 'http://localhost:3000/bookmarks'

  constructor(private http: HttpClient, private store: Store<State>) {
    this.http.get(this.url).subscribe(bookmarks => this.update)
  }

  add(item: T): void {
    this.store.dispatch(bookmarkAdd({ item }))
    // this.http
    //   .post(this.url, item)
    //   .pipe(map(() => [...this.items, item]))
    //   .subscribe(this.update)
  }

  addRequest(item: T): Observable<T> {
    return this.http.post<T>(this.url, item)
  }

  remove(id: BookmarkId): void {
    this.store.dispatch(bookmarkRemove({ id }))
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
