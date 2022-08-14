import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeestPopulaireComponent } from './meest-populaire.component';

describe('MeestPopulaireComponent', () => {
  let component: MeestPopulaireComponent;
  let fixture: ComponentFixture<MeestPopulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeestPopulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeestPopulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
