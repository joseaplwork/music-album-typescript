export interface Album {
  id: number;
  name: string;
  artist: string;
  thumbnail: string;
  tracks: number;
}
export interface AlbumsResponse {
  resultCount: number;
  results: Array<{
    wrapperType: string;
    collectionId: number;
    collectionName: string;
    artistName: string;
    artworkUrl100: string;
    trackCount: number;
  }>
}
