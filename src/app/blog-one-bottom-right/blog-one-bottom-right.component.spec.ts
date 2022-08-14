import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOneBottomRightComponent } from './blog-one-bottom-right.component';

describe('BlogOneBottomRightComponent', () => {
  let component: BlogOneBottomRightComponent;
  let fixture: ComponentFixture<BlogOneBottomRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOneBottomRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOneBottomRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
