import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Album } from '../../models/album.model';
import { AlbumsTransformer } from './music-abums.transformer';

@Injectable()
export class AlbumListService {
  constructor(private http: HttpClient) {}

  fetchAlbums() {
    return this.http.get(`${environment.api}?id=909253&entity=album`).pipe(
      map(AlbumsTransformer),
      catchError(error => throwError(error)),
    );
  }
}
