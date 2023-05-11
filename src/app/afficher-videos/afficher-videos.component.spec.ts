import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherVideosComponent } from './afficher-videos.component';

describe('AfficherVideosComponent', () => {
  let component: AfficherVideosComponent;
  let fixture: ComponentFixture<AfficherVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
