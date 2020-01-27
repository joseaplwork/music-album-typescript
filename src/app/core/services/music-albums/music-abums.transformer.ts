import { Album, AlbumsResponse } from '../../models/album.model';

export function AlbumsTransformer ({ results }: AlbumsResponse) {
  return results
    .filter(data => data.wrapperType === 'collection')
    .map(data => ({
      id: data.collectionId,
      name: data.collectionName,
      artist: data.artistName,
      thumbnail: data.artworkUrl100,
      tracks: data.trackCount,
    } as Album));
}
