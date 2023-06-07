import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPasajeroComponent } from './registrar-pasajero.component';

describe('RegistrarPasajeroComponent', () => {
  let component: RegistrarPasajeroComponent;
  let fixture: ComponentFixture<RegistrarPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPasajeroComponent]
    });
    fixture = TestBed.createComponent(RegistrarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
