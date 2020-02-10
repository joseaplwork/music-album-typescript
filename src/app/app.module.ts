import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './layout/album-list/album-list.component';
import { AlbumDetailsComponent } from './layout/album-details/album-details.component';
import { SharedModule } from './shared/shared.module';
import { TracksService } from './core/services/tracks.service';
import { tracksReducer } from './core/models/tracks/tracks.reducer';
import { TracksEffects } from './core/models/tracks/tracks.effects';
import { AlbumsService } from './core/services/albums.service';
import { albumsReducer } from './core/models/albums/albums.reducer';
import { AlbumsEffects } from './core/models/albums/albums.effects';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forRoot([AlbumsEffects, TracksEffects]),
    StoreModule.forRoot({ albumsReducer, tracksReducer }),
  ],
  providers: [
    AlbumsService,
    TracksService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
