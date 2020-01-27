import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { AlbumsService } from '../../services/albums.service';
import * as T from './albums.models';
import { actionTypes } from './albums.constants';
import { fetchAlbumListSuccess } from './albums.actions';

@Injectable()
export class AlbumsEffects {
  constructor(
    private actions$: Actions,
    private albumService: AlbumsService
  ) {}

  @Effect() fetchAlbums = this.actions$.pipe(
    ofType(actionTypes.FETCH_ALBUM_LIST),
    switchMap(() => this.albumService.fetchAlbums()),
    map((response: T.AlbumsResponse) =>
      fetchAlbumListSuccess({ data: response.results }),
    ),
  );
}
