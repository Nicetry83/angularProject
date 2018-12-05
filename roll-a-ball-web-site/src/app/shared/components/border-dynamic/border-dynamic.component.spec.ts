import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderDynamicComponent } from './border-dynamic.component';

describe('BorderDynamicComponent', () => {
  let component: BorderDynamicComponent;
  let fixture: ComponentFixture<BorderDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
