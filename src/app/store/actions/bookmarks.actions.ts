import { createAction, props } from '@ngrx/store'
import { Bookmark, BookmarkId } from '../../bookmarks/bookmarks.models'

export const bookmarkAdd = createAction('bookmarks/ADD', props<{ item: Bookmark }>())
export const bookmarkAddSuccess = createAction('bookmarks/ADD_SUCCESS', props<{ item: Bookmark }>())
export const bookmarkRemove = createAction('bookmarks/REMOVE', props<{ id: BookmarkId }>())
export const bookmarkRemoveSuccess = createAction(
  'bookmarks/REMOVE_SUCCESS',
  props<{ id: BookmarkId }>(),
)
export const bookmarksFetch = createAction('bookmarks/FETCH')
export const bookmarksFetchSuccess = createAction(
  'bookmarks/FETCH_SUCCESS',
  props<{ items: Bookmark[] }>(),
)
