import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {
  
  reserva : Reserva = new Reserva();

  constructor(private reservaServicio:ReservaService,private router:Router) {}

  ngOnInit(): void {
    console.log(this.reserva);
  }

  guardarReserva(){
    this.reservaServicio.ingresarReserva(this.reserva).subscribe(dato => {
      console.log(dato);
      //metodo para la lista
      this.irAListadeReserva();

    }, error => console.log(error));
  }

  irAListadeReserva(){
    this.router.navigate(['/Sistema/reservas']);
   
  }


  onSubmit(){
    this.guardarReserva();
  }

}
