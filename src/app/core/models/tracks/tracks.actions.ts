import { createAction, props } from '@ngrx/store';
import { actionTypes } from './tracks.constants';
import * as T from './tracks.models';

export const fetchTrackList = createAction(
  actionTypes.FETCH_TRACK_LIST,
  props<T.FetchTrackListPayload>(),
);
export const fetchTrackListSuccess = createAction(
  actionTypes.FETCH_TRACK_LIST_SUCCESS,
  props<T.FetchTrackListSuccessPayload>(),
);
