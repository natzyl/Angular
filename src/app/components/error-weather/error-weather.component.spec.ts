import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorWeatherComponent } from './error-weather.component';

describe('ErrorWeatherComponent', () => {
  let component: ErrorWeatherComponent;
  let fixture: ComponentFixture<ErrorWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
