import { Action, createReducer, on } from '@ngrx/store';
import { fetchTrackListSuccess } from './tracks.actions';
import { TracksState } from './tracks.models';

export const initialState: TracksState = {
  album: {},
  tracks: [],
};

const reducer = createReducer(
  initialState,
  on(fetchTrackListSuccess, (state, action) => ({
    ...state, tracks: action.data, album: action.data[0]
  })),
);

export function tracksReducer(state: TracksState = initialState, action: Action) {
  return reducer(state, action);
}
