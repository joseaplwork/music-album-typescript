import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonIconComponent } from './back-button-icon.component';

describe('BackButtonIconComponent', () => {
  let component: BackButtonIconComponent;
  let fixture: ComponentFixture<BackButtonIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
