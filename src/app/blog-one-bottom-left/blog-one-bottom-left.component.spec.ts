import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOneBottomLeftComponent } from './blog-one-bottom-left.component';

describe('BlogOneBottomLeftComponent', () => {
  let component: BlogOneBottomLeftComponent;
  let fixture: ComponentFixture<BlogOneBottomLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOneBottomLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOneBottomLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
