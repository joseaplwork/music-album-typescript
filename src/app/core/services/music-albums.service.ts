import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';

@Injectable()
export class MusicAlbumsService {
  fetchMusicAlbums() {
    return [
      {
        id: 1440857781,
        name: 'Cara de nino',
        artist: 'Jerry Rivera',
        thumbnail: 'https://i.scdn.co/image/d111a55e032b666f68360ad2b83cfc1a063a143d',
        tracks: 10,
      },
      {
        id: 1440854851,
        name: 'Recuerdos',
        artist: 'Juan Gabriel',
        thumbnail: 'https://i.ebayimg.com/images/g/ge0AAOxyni9TF4YT/s-l300.jpg',
        tracks: 100,
      },
      {
        id: 1469577723,
        name: 'Long distance',
        artist: 'Bruno mars',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAE5fn9Gq4isziBwb7Y41_219VS8vw-E6qHGJyTkyZhu4aewZTZQ&s',
        tracks: 40,
      },
      {
        id: 1440851963,
        name: 'Marinero de luces',
        artist: 'Isabel Pantoja',
        thumbnail: 'https://e.snmc.io/i/300/w/eb499e7e5f0fe6ce2093075b620d47f5/2324257',
        tracks: 4,
      },
      {
        id: 1440857781,
        name: 'Cara de nino',
        artist: 'Jerry Rivera',
        thumbnail: 'https://i.scdn.co/image/d111a55e032b666f68360ad2b83cfc1a063a143d',
        tracks: 10,
      },
      {
        id: 1440854851,
        name: 'Recuerdos',
        artist: 'Juan Gabriel',
        thumbnail: 'https://i.ebayimg.com/images/g/ge0AAOxyni9TF4YT/s-l300.jpg',
        tracks: 100,
      },
      {
        id: 1469577723,
        name: 'Long distance',
        artist: 'Bruno mars',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAE5fn9Gq4isziBwb7Y41_219VS8vw-E6qHGJyTkyZhu4aewZTZQ&s',
        tracks: 40,
      },
      {
        id: 1440851963,
        name: 'Marinero de luces',
        artist: 'Isabel Pantoja',
        thumbnail: 'https://e.snmc.io/i/300/w/eb499e7e5f0fe6ce2093075b620d47f5/2324257',
        tracks: 4,
      },
    ] as Array<Album>;
  }
}
