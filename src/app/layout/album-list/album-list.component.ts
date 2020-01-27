import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AlbumListService } from '../../core/services/music-albums/music-albums.service';
import { Album } from '../../core/models/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  Albums: Observable<Album[]>;

  constructor(
    private albumListService: AlbumListService
  ) { }

  ngOnInit(
  ) {
    this.Albums = this.albumListService.fetchAlbums();
  }
}
