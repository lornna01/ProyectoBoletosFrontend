import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAvionComponent } from './actualizar-avion.component';

describe('ActualizarAvionComponent', () => {
  let component: ActualizarAvionComponent;
  let fixture: ComponentFixture<ActualizarAvionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAvionComponent]
    });
    fixture = TestBed.createComponent(ActualizarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
