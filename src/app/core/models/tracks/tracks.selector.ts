import { createSelector } from '@ngrx/store';
import * as T from './tracks.models';
import { Album, AlbumResponse } from '../albums/albums.models';

export const selectTracksReducer = (state: T.TracksReducer) => state.tracksReducer;

export const selectTracks = createSelector(
  selectTracksReducer,
  (state: T.TracksState): Array<T.Track> => {
    return state.tracks
      .filter(data => data.wrapperType === 'track')
      .map(data =>
          ({
            id: data.trackId,
            name: data.trackName,
            duration: data.trackTimeMillis,
            releaseDay: data.releaseDate,
          } as T.Track),
      );
  },
);

export const selectAlbum = createSelector(
  selectTracksReducer,
  (data: T.TracksState): Album => {
    const album = data.album as AlbumResponse;

    return {
      id: album.collectionId,
      name: album.collectionName,
      artist: album.artistName,
      thumbnail: album.artworkUrl100,
      tracks: album.trackCount,
    } as Album;
  },
);
