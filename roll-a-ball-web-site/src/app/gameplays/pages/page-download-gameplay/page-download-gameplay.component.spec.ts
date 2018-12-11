import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDownloadGameplayComponent } from './page-download-gameplay.component';

describe('PageDownloadGameplayComponent', () => {
  let component: PageDownloadGameplayComponent;
  let fixture: ComponentFixture<PageDownloadGameplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDownloadGameplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDownloadGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
