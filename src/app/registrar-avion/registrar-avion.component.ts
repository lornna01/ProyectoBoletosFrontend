import { Component, OnInit} from '@angular/core';
import { Avion } from '../avion';
import { AvionService } from '../avion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-avion',
  templateUrl: './registrar-avion.component.html',
  styleUrls: ['./registrar-avion.component.css']
})
export class RegistrarAvionComponent implements OnInit {

  avion : Avion = new Avion();

  constructor(private avionServicio:AvionService,private router:Router) {}

  ngOnInit(): void {
    console.log(this.avion);
  }

  guardarAvion(){
    this.avionServicio.ingresarAvion(this.avion).subscribe(dato => {
      console.log(dato);
      //metodo para la lista de AVIONES
      this.irAListadeAviones();

    }, error => console.log(error));
  }

  irAListadeAviones(){
    this.router.navigate(['/Sistema/aviones']);
    //swal('Empleado registrado',`El empleado ${this.cliente.nombreCliente} ha sido registrado con exito`,`success`);
  }


  onSubmit(){
    this.guardarAvion();
  }


}
