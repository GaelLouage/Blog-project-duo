import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBottomMiddelBottomComponent } from './blog-bottom-middel-bottom.component';

describe('BlogBottomMiddelBottomComponent', () => {
  let component: BlogBottomMiddelBottomComponent;
  let fixture: ComponentFixture<BlogBottomMiddelBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBottomMiddelBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBottomMiddelBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
