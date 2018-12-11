import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGameplayComponent } from './second-gameplay.component';

describe('SecondGameplayComponent', () => {
  let component: SecondGameplayComponent;
  let fixture: ComponentFixture<SecondGameplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondGameplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
