import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Track } from 'src/app/core/models/tracks/tracks.models';
import { TracksReducer } from 'src/app/core/models/tracks/tracks.models';
import { selectTracks, selectAlbum } from 'src/app/core/models/tracks/tracks.selector';
import { Album } from 'src/app/core/models/albums/albums.models';
import { fetchTrackList } from 'src/app/core/models/tracks/tracks.actions';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  album$: Observable<Album>;
  tracks$: Observable<Track[]>;

  constructor(
    private store: Store<TracksReducer>,
    private route: ActivatedRoute,
  ) {
    this.tracks$ = store.pipe(select(selectTracks));
    this.album$ = store.pipe(select(selectAlbum));
  }

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(fetchTrackList({ id: parseInt(albumId, 10) }));
  }
}
