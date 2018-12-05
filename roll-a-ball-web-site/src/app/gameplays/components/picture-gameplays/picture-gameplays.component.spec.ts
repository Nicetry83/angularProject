import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureGameplaysComponent } from './picture-gameplays.component';

describe('PictureGameplaysComponent', () => {
  let component: PictureGameplaysComponent;
  let fixture: ComponentFixture<PictureGameplaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureGameplaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
