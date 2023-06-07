import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBoletosComponent } from './lista-boletos.component';

describe('ListaBoletosComponent', () => {
  let component: ListaBoletosComponent;
  let fixture: ComponentFixture<ListaBoletosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaBoletosComponent]
    });
    fixture = TestBed.createComponent(ListaBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
