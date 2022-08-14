import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineheadersComponent } from './lineheaders.component';

describe('LineheadersComponent', () => {
  let component: LineheadersComponent;
  let fixture: ComponentFixture<LineheadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineheadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineheadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
