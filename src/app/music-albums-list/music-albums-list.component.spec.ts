import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAlbumsListComponent } from './music-albums-list.component';

describe('MusicAlbumsListComponent', () => {
  let component: MusicAlbumsListComponent;
  let fixture: ComponentFixture<MusicAlbumsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicAlbumsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicAlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
