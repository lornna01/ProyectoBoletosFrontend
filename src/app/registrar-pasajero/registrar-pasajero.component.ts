import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasajero } from '../pasajero';
import { PasajeroService } from '../pasajero.service';

@Component({
  selector: 'app-registrar-pasajero',
  templateUrl: './registrar-pasajero.component.html',
  styleUrls: ['./registrar-pasajero.component.css']
})
export class RegistrarPasajeroComponent implements OnInit {
  
  pasajero : Pasajero = new Pasajero();

  constructor(private pasajeroServicio:PasajeroService,private router:Router) {}

  ngOnInit(): void {
    console.log(this.pasajero);
  }

  guardarPasajero(){
    this.pasajeroServicio.ingresarPasajero(this.pasajero).subscribe(dato => {
      console.log(dato);
      //metodo para la lista
      this.irAListadePasajeros();

    }, error => console.log(error));
  }

  irAListadePasajeros(){
    this.router.navigate(['/Sistema/pasajeros']);
   
  }


  onSubmit(){
    this.guardarPasajero();
  }
}
