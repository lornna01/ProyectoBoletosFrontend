import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPasajeroComponent } from './actualizar-pasajero.component';

describe('ActualizarPasajeroComponent', () => {
  let component: ActualizarPasajeroComponent;
  let fixture: ComponentFixture<ActualizarPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPasajeroComponent]
    });
    fixture = TestBed.createComponent(ActualizarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
