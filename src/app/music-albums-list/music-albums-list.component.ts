import { Component, OnInit } from '@angular/core';

import { MusicAlbumsService } from '../core/services/music-albums.service';
import { Album } from '../core/models/album.model';

@Component({
  selector: 'app-music-albums-list',
  templateUrl: './music-albums-list.component.html',
  styleUrls: ['./music-albums-list.component.scss']
})
export class MusicAlbumsListComponent implements OnInit {
  musicAlbums: Array<Album>;

  constructor(
    private musicAlbumsService: MusicAlbumsService
  ) { }

  ngOnInit(
  ) {
    this.musicAlbums = this.musicAlbumsService.fetchMusicAlbums();
  }
}
