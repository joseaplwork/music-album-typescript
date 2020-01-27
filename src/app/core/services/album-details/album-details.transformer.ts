import { Track, TracksResponse } from '../../models/tracks.model';

export function albumDetailsTransformer ({ results }: TracksResponse) {
  return results
    .filter(data => data.wrapperType === 'track')
    .map(data => ({
      id: data.trackId,
      name: data.trackName,
      duration: data.trackTimeMillis,
      releaseDay: data.releaseDate,
    } as Track));
}
