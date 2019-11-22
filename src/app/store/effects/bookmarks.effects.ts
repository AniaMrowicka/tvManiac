import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as BookmarksActions from '../actions/bookmarks.actions'
import { map, switchMap } from 'rxjs/operators'
import { BookmarksService } from '../../bookmarks/bookmarks.service'
import { bookmarkAddSuccess } from '../actions/bookmarks.actions'

@Injectable()
export class BookmarksEffects {
  constructor(private actions$: Actions, private bs: BookmarksService) {}

  addBookmarks$ = this.actions$.pipe(
    ofType(BookmarksActions.bookmarkAdd),
    switchMap(({ item }) => this.bs.addRequest(item).pipe(map(() => bookmarkAddSuccess({ item })))),
  )
}
