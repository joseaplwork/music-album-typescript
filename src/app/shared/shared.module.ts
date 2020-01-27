import { NgModule } from '@angular/core';
import { BackButtonIconComponent } from './components/back-button-icon/back-button-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { MinutesSecondsPipe } from './pipes/minutes-seconds.pipe';

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
