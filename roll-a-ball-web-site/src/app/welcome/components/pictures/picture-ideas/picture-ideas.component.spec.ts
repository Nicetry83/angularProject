import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureIdeasComponent } from './picture-ideas.component';

describe('PictureIdeasComponent', () => {
  let component: PictureIdeasComponent;
  let fixture: ComponentFixture<PictureIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
