import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBottomRightTopComponent } from './blog-bottom-right-top.component';

describe('BlogBottomRightTopComponent', () => {
  let component: BlogBottomRightTopComponent;
  let fixture: ComponentFixture<BlogBottomRightTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBottomRightTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBottomRightTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
