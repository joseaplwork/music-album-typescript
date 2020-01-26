import { NgModule } from '@angular/core';
import { BackButtonIconComponent } from './layout/back-button-icon/back-button-icon.component';
import { HeaderComponent } from './layout/header/header.component';
import { MinutesSecondsPipe } from './pipes/minutes-seconds/minutes-seconds.pipe';

@NgModule({
  declarations: [
    BackButtonIconComponent,
    HeaderComponent,
    MinutesSecondsPipe,
  ],
  exports: [
    BackButtonIconComponent,
    HeaderComponent,
    MinutesSecondsPipe,
  ],
})
export class SharedModule {}
