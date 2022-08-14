import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBottomTopLeftComponent } from './blog-bottom-top-left.component';

describe('BlogBottomTopLeftComponent', () => {
  let component: BlogBottomTopLeftComponent;
  let fixture: ComponentFixture<BlogBottomTopLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBottomTopLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBottomTopLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
