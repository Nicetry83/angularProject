import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGameplaysComponent } from './page-gameplays.component';

describe('PageGameplaysComponent', () => {
  let component: PageGameplaysComponent;
  let fixture: ComponentFixture<PageGameplaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGameplaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
