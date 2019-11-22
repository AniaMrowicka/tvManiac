import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store'
import { environment } from '../../../environments/environment'
import { bookmarks, State as BookmarksState } from './bookmars.reducer'

export interface State {
  bookmarks: BookmarksState
}

export const reducers: ActionReducerMap<State> = {
  bookmarks,
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
