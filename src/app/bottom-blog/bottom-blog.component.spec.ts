import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBlogComponent } from './bottom-blog.component';

describe('BottomBlogComponent', () => {
  let component: BottomBlogComponent;
  let fixture: ComponentFixture<BottomBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
