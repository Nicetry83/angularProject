import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIdeasComponent } from './page-ideas.component';

describe('PageIdeasComponent', () => {
  let component: PageIdeasComponent;
  let fixture: ComponentFixture<PageIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
