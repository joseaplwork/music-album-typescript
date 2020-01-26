import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicAlbumsListComponent } from './music-albums-list/music-albums-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
  {
    path: '',
    component: MusicAlbumsListComponent,
  },
  {
    path: 'detail/:id',
    component: AlbumDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
