import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AlbumsService {
  constructor(private http: HttpClient) {}

  fetchAlbums() {
    return this.http.get(`${environment.api}?id=909253&entity=album`);
  }
}
