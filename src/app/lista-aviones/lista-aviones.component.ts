import { Component, OnInit } from '@angular/core';
import { Avion } from '../avion';
import { AvionService } from '../avion.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista-aviones',
  templateUrl: './lista-aviones.component.html',
  styleUrls: ['./lista-aviones.component.css']
})
export class ListaAvionesComponent implements OnInit {

  aviones: Avion[];

  constructor(private avionServicio: AvionService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerAviones();

  }

  actualizarAvion(id: number) {
    this.router.navigate(['Sistema/aviones/actualizar-avion/:id', id]);
  }

  private obtenerAviones() {
    this.avionServicio.obtenerListaAviones().subscribe(dato => {
      this.aviones = dato;
    });
  }


  eliminarAvion(id: number) {
    this.avionServicio.eliminarAvion(id).subscribe(
      (dato: any) => {
        console.log(dato);
        this.obtenerAviones();
      },
      (error: HttpErrorResponse) => {
        if (error instanceof SyntaxError && error.status === 200) {
          console.log(`AVION eliminado con el id:  ${id}`);
          this.obtenerAviones();
        } else {
          console.error('Error al eliminar el AVION: ', error);
        }
      }
    );
  }



 
 




}
