import { Action, createReducer, on } from '@ngrx/store';
import { fetchAlbumListSuccess } from './albums.actions';
import { AlbumsState } from './albums.models';

export const initialState: AlbumsState = {
  albums: [],
};

const reducer = createReducer(
  initialState,
  on(fetchAlbumListSuccess, (state, action) => ({
    ...state, albums: action.data
  })),
);

export function albumsReducer(state: AlbumsState = initialState, action: Action) {
  return reducer(state, action);
}
