import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Vuelo } from '../vuelo';
import { VueloService } from '../vuelo.service';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent implements OnInit{

  vuelos: Vuelo[];

  constructor(private vueloServicio: VueloService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerVuelos();

  }

  actualizarVuelo(id: number) {
    this.router.navigate(['Sistema/vuelos/actualizar-vuelo/:id', id]);
  }

  private obtenerVuelos() {
    this.vueloServicio.obtenerListaVuelos().subscribe(dato => {
      this.vuelos = dato;
    });
  }

  eliminarVuelo(id: number) {
    this.vueloServicio.eliminarVuelo(id).subscribe(
      (dato: any) => {
        console.log(dato);
        this.obtenerVuelos();
      },
      (error: HttpErrorResponse) => {
        if (error instanceof SyntaxError && error.status === 200) {
          console.log(`VUELO eliminadao con el id: ${id}`);
          this.obtenerVuelos();
        } else {
          console.error('Error al eliminar VUELO: ', error);
        }
      }
    );
  }
}