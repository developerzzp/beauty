import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyDetailComponent } from './beauty-detail.component';

describe('BeautyDetailComponent', () => {
  let component: BeautyDetailComponent;
  let fixture: ComponentFixture<BeautyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
