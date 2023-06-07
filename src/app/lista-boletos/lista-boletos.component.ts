import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Boleto } from '../boleto';
import { BoletoService } from '../boleto.service';

@Component({
  selector: 'app-lista-boletos',
  templateUrl: './lista-boletos.component.html',
  styleUrls: ['./lista-boletos.component.css']
})
export class ListaBoletosComponent implements OnInit{

  boletos: Boleto[];

  constructor(private boletoServicio: BoletoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerBoletos();

  }

  actualizarBoleto(id: number) {
    this.router.navigate(['Sistema/boletos/actualizar-boleto/:id', id]);
  }

  private obtenerBoletos() {
    this.boletoServicio.obtenerListaBoletos().subscribe(dato => {
      this.boletos = dato;
    });
  }



  eliminarBoleto(id: number) {
    this.boletoServicio.eliminarBoleto(id).subscribe(
      (dato: any) => {
        console.log(dato);
        this.obtenerBoletos();
      },
      (error: HttpErrorResponse) => {
        if (error instanceof SyntaxError && error.status === 200) {
          console.log(`BOLETO eliminado con el id: ${id}`);
          this.obtenerBoletos();
        } else {
          console.error('Error al eliminar BOLETO: ', error);
        }
      }
    );
  }
}
