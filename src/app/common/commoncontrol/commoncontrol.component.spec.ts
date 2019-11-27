import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncontrolComponent } from './commoncontrol.component';

describe('CommoncontrolComponent', () => {
  let component: CommoncontrolComponent;
  let fixture: ComponentFixture<CommoncontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommoncontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoncontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
