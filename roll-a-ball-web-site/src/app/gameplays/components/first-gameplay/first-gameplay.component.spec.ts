import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGameplayComponent } from './first-gameplay.component';

describe('FirstGameplayComponent', () => {
  let component: FirstGameplayComponent;
  let fixture: ComponentFixture<FirstGameplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstGameplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
