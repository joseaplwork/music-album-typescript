export interface Track {
  id: number;
  name: string;
  duration: number;
  releaseDay: string;
}

export interface TracksResponse {
  resultCount: number;
  results: Array<{
    wrapperType: string;
    trackId: number;
    trackName: string;
    trackTimeMillis: number;
    releaseDate: string;
  }>
}
