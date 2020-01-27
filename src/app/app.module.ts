import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './layout/album-list/album-list.component';
import { AlbumListService } from './core/services/music-albums/music-albums.service';
import { AlbumDetailsComponent } from './layout/album-details/album-details.component';
import { SharedModule } from './shared/shared.module';
import { AlbumDetailsService } from './core/services/album-details/album-details.service';

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
  ],
  providers: [
    AlbumListService,
    AlbumDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
