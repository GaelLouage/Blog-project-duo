import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBottomBottomLeftComponent } from './blog-bottom-bottom-left.component';

describe('BlogBottomBottomLeftComponent', () => {
  let component: BlogBottomBottomLeftComponent;
  let fixture: ComponentFixture<BlogBottomBottomLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBottomBottomLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBottomBottomLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
