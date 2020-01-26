import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicAlbumsListComponent } from './music-albums-list/music-albums-list.component';
import { MusicAlbumsService } from './core/services/music-albums.service';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SharedModule } from './shared/shared.module';
import { AlbumDetailsService } from './core/services/album-details.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicAlbumsListComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    MusicAlbumsService,
    AlbumDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
