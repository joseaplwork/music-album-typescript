import { createSelector } from '@ngrx/store';
import * as T from './albums.models';

export const selectAlbumReducer = (state: T.AlbumsReducer) => state.albumsReducer;

export const selectAlbums = createSelector(
  selectAlbumReducer,
  (state: T.AlbumsState): Array<T.Album> => {
    return state.albums
    .filter(data => data.wrapperType === 'collection')
    .map(data => ({
      id: data.collectionId,
      name: data.collectionName,
      artist: data.artistName,
      thumbnail: data.artworkUrl100,
      tracks: data.trackCount,
    } as T.Album));
  }
);
