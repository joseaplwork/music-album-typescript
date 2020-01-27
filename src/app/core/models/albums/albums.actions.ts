import { createAction, props } from '@ngrx/store';
import { actionTypes } from './albums.constants';
import * as T from './albums.models';

export const fetchAlbumList = createAction(actionTypes.FETCH_ALBUM_LIST);
export const fetchAlbumListSuccess = createAction(
  actionTypes.FETCH_ALBUM_LIST_SUCCESS,
  props<T.FetchAlbumListSuccessPayload>(),
);
