import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit{

  reservas: Reserva[];

  constructor(private reservaServicio: ReservaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerReservas();

  }

  actualizarReserva(id: number) {
    this.router.navigate(['Sistema/reservas/actualizar-reserva/:id', id]);
  }

  private obtenerReservas() {
    this.reservaServicio.obtenerListaReservas().subscribe(dato => {
      this.reservas = dato;
    });
  }



  eliminarReserva(id: number) {
    this.reservaServicio.eliminarReserva(id).subscribe(
      (dato: any) => {
        console.log(dato);
        this.obtenerReservas();
      },
      (error: HttpErrorResponse) => {
        if (error instanceof SyntaxError && error.status === 200) {
          console.log(`RESERVA eliminada con el id: ${id}`);
          this.obtenerReservas();
        } else {
          console.error('Error al eliminar RESERVA: ', error);
        }
      }
    );
  }
}
