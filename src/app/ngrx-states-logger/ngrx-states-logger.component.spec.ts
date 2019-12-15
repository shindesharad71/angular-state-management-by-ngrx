import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStatesLoggerComponent } from './ngrx-states-logger.component';

describe('NgrxStatesLoggerComponent', () => {
  let component: NgrxStatesLoggerComponent;
  let fixture: ComponentFixture<NgrxStatesLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxStatesLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxStatesLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
