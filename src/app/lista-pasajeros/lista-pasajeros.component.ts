import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Pasajero } from '../pasajero';
import { PasajeroService } from '../pasajero.service';

@Component({
  selector: 'app-lista-pasajeros',
  templateUrl: './lista-pasajeros.component.html',
  styleUrls: ['./lista-pasajeros.component.css']
})
export class ListaPasajerosComponent implements OnInit{

  pasajeros: Pasajero[];

  constructor(private pasajeroServicio: PasajeroService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPasajeros();

  }

  actualizarPasajero(id: number) {
    this.router.navigate(['Sistema/pasajeros/actualizar-pasajero/:id', id]);
  }

  private obtenerPasajeros() {
    this.pasajeroServicio.obtenerListaPasajeros().subscribe(dato => {
      this.pasajeros = dato;
    });
  }



  eliminarPasajero(id: number) {
    this.pasajeroServicio.eliminarPasajero(id).subscribe(
      (dato: any) => {
        console.log(dato);
        this.obtenerPasajeros();
      },
      (error: HttpErrorResponse) => {
        if (error instanceof SyntaxError && error.status === 200) {
          console.log(`Pasajero eliminado con el id: ${id}`);
          this.obtenerPasajeros();
        } else {
          console.error('Error al eliminar el Pasajero: ', error);
        }
      }
    );
  }

}
