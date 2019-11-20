import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncomponentComponent } from './commoncomponent.component';

describe('CommoncomponentComponent', () => {
  let component: CommoncomponentComponent;
  let fixture: ComponentFixture<CommoncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommoncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
