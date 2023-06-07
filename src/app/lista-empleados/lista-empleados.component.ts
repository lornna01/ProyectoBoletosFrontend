import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})

export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();

  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['Sistema/empleados/actualizar-empleado/:id', id]);
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }



  eliminarEmpleado(id: number) {
    this.empleadoServicio.eliminarEmpleado(id).subscribe(
      (dato: any) => {
        console.log(dato);
        this.obtenerEmpleados();
      },
      (error: HttpErrorResponse) => {
        if (error instanceof SyntaxError && error.status === 200) {
          console.log(`Empleado eliminado con el id: ${id}`);
          this.obtenerEmpleados();
        } else {
          console.error('Error al eliminar el empleado:', error);
        }
      }
    );
  }





}
