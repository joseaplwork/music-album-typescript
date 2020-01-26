import { Injectable } from '@angular/core';
import { Song } from '../models/tracks.model';
import { Album } from '../models/album.model';

@Injectable()
export class AlbumDetailsService {
  getAlbum() {
    return {
      id: 1440857781,
      name: 'Cara de nino',
      artist: 'Jerry Rivera',
      thumbnail: 'https://i.scdn.co/image/d111a55e032b666f68360ad2b83cfc1a063a143d',
      tracks: 10,
    } as Album;
  }

  fetchAlbumDetails() {
    return [
      {
        id: 1440855221,
        name: 'All At Once',
        duration: 217716,
        releaseDay: '2008-02-02T12:00:00Z',
      },
      {
        id: 1440855229,
        name: 'Sleep Through the Static',
        duration: 217716,
        releaseDay: '2001-02-02T12:00:00Z',
      },
      {
        id: 1440855223,
        name: 'All At Once',
        duration: 217716,
        releaseDay: '2002-04-02T12:00:00Z',
      },
      {
        id: 1440855225,
        name: 'They Do, They Don\t',
        duration: 217716,
        releaseDay: '2010-10-02T12:00:00Z',
      },
      {
        id: 1440855221,
        name: 'All At Once',
        duration: 217716,
        releaseDay: '2008-12-02T12:00:00Z',
      },
      {
        id: 1440855229,
        name: 'Sleep Through the Static',
        duration: 217716,
        releaseDay: '2001-22-02T12:00:00Z',
      },
      {
        id: 1440855223,
        name: 'All At Once',
        duration: 217716,
        releaseDay: '2002-08-02T12:00:00Z',
      },
      {
        id: 1440855225,
        name: 'They Do, They Don\t',
        duration: 217716,
        releaseDay: '2010-01-02T12:00:00Z',
      },
    ] as Array<Song>;
  }
}
