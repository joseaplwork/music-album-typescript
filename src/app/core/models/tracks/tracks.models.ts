import { AlbumResponse } from '../albums/albums.models';

export interface Track {
  id: number;
  name: string;
  duration: number;
  releaseDay: string;
}

export interface TrackResponse {
  wrapperType: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: number;
  releaseDate: string;
}

export interface TracksResponse {
  resultCount: number;
  results: Array<TrackResponse>
}

// Reducer
export interface TracksState {
  album: AlbumResponse | {};
  tracks: Array<TrackResponse>;
}

// Selectors
export interface TracksReducer {
  tracksReducer: TracksState;
}

// Actions
export interface FetchTrackListSuccessPayload {
  data: Array<TrackResponse>
}

export interface FetchTrackListAction {
  type: string;
  id: number
}

export interface FetchTrackListPayload {
  id: number
}
