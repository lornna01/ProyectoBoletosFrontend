import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAvionesComponent } from './lista-aviones.component';

describe('ListaAvionesComponent', () => {
  let component: ListaAvionesComponent;
  let fixture: ComponentFixture<ListaAvionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAvionesComponent]
    });
    fixture = TestBed.createComponent(ListaAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
