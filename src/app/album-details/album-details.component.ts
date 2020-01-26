import { Component, OnInit } from '@angular/core';
import { AlbumDetailsService } from '../core/services/album-details.service';
import { Song } from '../core/models/tracks.model';
import { Album } from '../core/models/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  tracks: Array<Song>;

  constructor(
    private albumDetails: AlbumDetailsService,
  ) { }

  ngOnInit() {
    this.tracks = this.albumDetails.fetchAlbumDetails();
    this.album = this.albumDetails.getAlbum();
  }
}
