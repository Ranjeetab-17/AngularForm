import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedvideosComponent } from './relatedvideos.component';

describe('RelatedvideosComponent', () => {
  let component: RelatedvideosComponent;
  let fixture: ComponentFixture<RelatedvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
