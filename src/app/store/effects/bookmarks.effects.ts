import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import * as BookmarksActions from '../actions/bookmarks.actions'
import { map, switchMap } from 'rxjs/operators'
import { BookmarksService } from '../../bookmarks/bookmarks.service'
import {
  bookmarkAddSuccess,
  bookmarkRemoveSuccess,
  bookmarksFetchSuccess,
} from '../actions/bookmarks.actions'

@Injectable()
export class BookmarksEffects {
  constructor(private actions$: Actions, private bs: BookmarksService) {}

  @Effect()
  addBookmarks$ = this.actions$.pipe(
    ofType(BookmarksActions.bookmarkAdd),
    switchMap(({ item }) => this.bs.addRequest(item).pipe(map(() => bookmarkAddSuccess({ item })))),
  )
  @Effect()
  removeBookmarks$ = this.actions$.pipe(
    ofType(BookmarksActions.bookmarkRemove),
    switchMap(({ id }) => this.bs.removeRequest(id).pipe(map(() => bookmarkRemoveSuccess({ id })))),
  )
  @Effect()
  fetchBookmarks$ = this.actions$.pipe(
    ofType(BookmarksActions.bookmarksFetch),
    switchMap(() => this.bs.fetchRequest().pipe(map(items => bookmarksFetchSuccess({ items })))),
  )
}
