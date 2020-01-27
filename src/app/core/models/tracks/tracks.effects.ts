import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { TracksService } from '../../services/tracks.service';
import * as T from './tracks.models';
import { actionTypes } from './tracks.constants';
import { fetchTrackListSuccess } from './tracks.actions';

@Injectable()
export class TracksEffects {
  constructor(
    private actions$: Actions,
    private albumService: TracksService
  ) {}

  @Effect() fetchAlbums = this.actions$.pipe(
    ofType(actionTypes.FETCH_TRACK_LIST),
    switchMap((action: T.FetchTrackListAction) => this.albumService.fetchTrackListByAlbum(action.id)),
    map((response: T.TracksResponse) =>
      fetchTrackListSuccess({ data: response.results }),
    ),
  );
}
