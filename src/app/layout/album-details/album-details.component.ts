import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumDetailsService } from '../../core/services/album-details/album-details.service';
import { Track } from '../../core/models/tracks.model';
import { Album } from '../../core/models/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  tracks: Observable<Track[]>;

  constructor(
    private albumDetails: AlbumDetailsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');

    this.tracks = this.albumDetails.fetchAlbumDetails(albumId);
    this.album = this.albumDetails.getAlbum();
  }
}
