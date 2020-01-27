import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Track } from '../../models/tracks.model';
import { Album } from '../../models/album.model';
import { environment } from '../../../../environments/environment';
import { albumDetailsTransformer } from './album-details.transformer';


@Injectable()
export class AlbumDetailsService {
  albumId: number;

  constructor(
    private http: HttpClient,
  ) {}

  getAlbum() {
    return {
      id: 1440857781,
      name: 'Cara de nino',
      artist: 'Jerry Rivera',
      thumbnail: 'https://i.scdn.co/image/d111a55e032b666f68360ad2b83cfc1a063a143d',
      tracks: 10,
    } as Album;
  }

  fetchAlbumDetails(albumId: string) {
    return this.http.get(`${environment.api}?id=${albumId}&entity=song`).pipe(
      map(albumDetailsTransformer),
      catchError(error => throwError(error)),
    );
  }
}
