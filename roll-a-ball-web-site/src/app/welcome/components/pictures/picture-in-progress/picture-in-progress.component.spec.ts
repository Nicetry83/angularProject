import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureInProgressComponent } from './picture-in-progress.component';

describe('PictureInProgressComponent', () => {
  let component: PictureInProgressComponent;
  let fixture: ComponentFixture<PictureInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
