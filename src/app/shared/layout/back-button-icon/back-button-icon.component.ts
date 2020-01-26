import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button-icon',
  templateUrl: './back-button-icon.component.html',
})
export class BackButtonIconComponent {
  @Input() size = 25;
}
