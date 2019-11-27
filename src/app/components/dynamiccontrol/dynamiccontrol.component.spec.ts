import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccontrolComponent } from './dynamiccontrol.component';

describe('DynamiccontrolComponent', () => {
  let component: DynamiccontrolComponent;
  let fixture: ComponentFixture<DynamiccontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
