import { Bookmark } from '../../bookmarks/bookmarks.models'
import { createReducer, on } from '@ngrx/store'
import * as BookmarksActions from '../actions/bookmarks.actions'

export interface State {
  item: Bookmark[]
  pending: boolean
}

export const initialState: State = {
  item: [],
  pending: false,
}

export const bookmarks = createReducer(
  initialState,
  on(BookmarksActions.bookmarkAddSuccess, (state, action) => {
    return { ...state, items: [...state.item, action.item] }
  }),
  on(BookmarksActions.bookmarkRemoveSuccess, (state, action) => {
    return { ...state, items: state.item.filter(item => item.id !== action.id) }
  }),
)
