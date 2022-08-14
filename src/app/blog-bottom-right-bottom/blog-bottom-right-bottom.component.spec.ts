import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBottomRightBottomComponent } from './blog-bottom-right-bottom.component';

describe('BlogBottomRightBottomComponent', () => {
  let component: BlogBottomRightBottomComponent;
  let fixture: ComponentFixture<BlogBottomRightBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBottomRightBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBottomRightBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
