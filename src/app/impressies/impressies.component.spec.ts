import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressiesComponent } from './impressies.component';

describe('ImpressiesComponent', () => {
  let component: ImpressiesComponent;
  let fixture: ComponentFixture<ImpressiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpressiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
