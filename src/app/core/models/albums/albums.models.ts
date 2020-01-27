export interface Album {
  id: number;
  name: string;
  artist: string;
  thumbnail: string;
  tracks: number;
}

export interface AlbumResponse {
  wrapperType: string;
  collectionId: number;
  collectionName: string;
  artistName: string;
  artworkUrl100: string;
  trackCount: number;
}

export interface AlbumsResponse {
  resultCount: number;
  results: Array<AlbumResponse>
}
// Reducer
export interface AlbumsState {
  albums: Array<AlbumResponse>;
}

// Selectors
export interface AlbumsReducer {
  albumsReducer: AlbumsState;
}

// Actions
export interface FetchAlbumListSuccessPayload {
  data: Array<AlbumResponse>
}
