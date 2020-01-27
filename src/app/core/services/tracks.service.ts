import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class TracksService {
  constructor(
    private http: HttpClient,
  ) {}

  fetchTrackListByAlbum(albumId: number) {
    return this.http.get(`${environment.api}?id=${albumId}&entity=song`);
  }
}
