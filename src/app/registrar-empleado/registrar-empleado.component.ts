import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  
  empleado : Empleado = new Empleado();

  constructor(private empleadoServicio:EmpleadoService,private router:Router) {}

  ngOnInit(): void {
    console.log(this.empleado);
  }

  guardarEmpleado(){
    this.empleadoServicio.ingresarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      //metodo para la lista de empleados
      this.irAListadeEmpleados();

    }, error => console.log(error));
  }

  irAListadeEmpleados(){
    this.router.navigate(['/Sistema/empleados']);
    //swal('Empleado registrado',`El empleado ${this.cliente.nombreCliente} ha sido registrado con exito`,`success`);
  }


  onSubmit(){
    this.guardarEmpleado();
  }

}
