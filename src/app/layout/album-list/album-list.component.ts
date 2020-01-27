import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Album, AlbumsReducer } from '../../core/models/albums/albums.models';
import { fetchAlbumList } from '../../core/models/albums/albums.actions';
import { selectAlbums } from '../../core/models/albums/albums.selectors';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  albums$: Observable<Album[]>;

  constructor(private store: Store<AlbumsReducer>) {
    this.albums$ = store.pipe(select(selectAlbums));
  }

  ngOnInit() {
    this.store.dispatch(fetchAlbumList());
  }
}
