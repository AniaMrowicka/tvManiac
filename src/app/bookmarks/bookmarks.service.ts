import { Injectable } from '@angular/core'
import { Bookmark, BookmarkId } from './bookmarks.models'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Store } from '@ngrx/store'
import { State } from '../store/reducers'
import { bookmarkAdd, bookmarkRemove, bookmarksFetch } from '../store/actions/bookmarks.actions'

@Injectable({
  providedIn: 'root',
})
export class BookmarksService<T extends Bookmark = Bookmark> {
  items$ = this.store.select(state => state.bookmarks.items)
  private readonly url = 'http://localhost:3000/bookmarks'

  constructor(private http: HttpClient, private store: Store<State>) {
    setTimeout(() => {
      this.store.dispatch(bookmarksFetch())
    })
  }

  add(item: T): void {
    this.store.dispatch(bookmarkAdd({ item }))
  }

  addRequest(item: T): Observable<T> {
    return this.http.post<T>(this.url, item)
  }

  remove(id: BookmarkId): void {
    this.store.dispatch(bookmarkRemove({ id }))
  }

  has(id: BookmarkId): boolean {
    let isBookmarked: boolean
    this.store
      .select(state => state.bookmarks.items.some(item => item.id === id))
      .subscribe(bookmark => (isBookmarked = bookmark))
    return isBookmarked
  }

  removeRequest(id: BookmarkId): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }
  fetchRequest(): Observable<T[]> {
    return this.http.get<T[]>(this.url)
  }
}
