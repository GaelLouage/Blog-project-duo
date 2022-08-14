import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedSocialComponent } from './rounded-social.component';

describe('RoundedSocialComponent', () => {
  let component: RoundedSocialComponent;
  let fixture: ComponentFixture<RoundedSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundedSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
