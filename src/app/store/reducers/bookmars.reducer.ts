import { Bookmark } from '../../bookmarks/bookmarks.models'
import { createReducer, on } from '@ngrx/store'
import * as BookmarksActions from '../actions/bookmarks.actions'

export interface State {
  items: Bookmark[]
  pending: boolean
}

export const initialState: State = {
  items: [],
  pending: false,
}

export const bookmarks = createReducer(
  initialState,
  on(BookmarksActions.bookmarkAddSuccess, (state, action) => {
    return { ...state, items: [...state.items, action.item] }
  }),
  on(BookmarksActions.bookmarkRemoveSuccess, (state, action) => {
    return { ...state, items: state.items.filter(item => item.id !== action.id) }
  }),
  on(BookmarksActions.bookmarksFetchSuccess, (state, action) => {
    return { ...state, items: action.items }
  }),
)
