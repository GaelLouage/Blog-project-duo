import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOneMainComponent } from './blog-one-main.component';

describe('BlogOneMainComponent', () => {
  let component: BlogOneMainComponent;
  let fixture: ComponentFixture<BlogOneMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOneMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
