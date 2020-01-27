import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './layout/album-list/album-list.component';
import { AlbumDetailsComponent } from './layout/album-details/album-details.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumListComponent,
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
