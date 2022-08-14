import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBottomMiddelTopComponent } from './blog-bottom-middel-top.component';

describe('BlogBottomMiddelTopComponent', () => {
  let component: BlogBottomMiddelTopComponent;
  let fixture: ComponentFixture<BlogBottomMiddelTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBottomMiddelTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBottomMiddelTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
