import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id: number;
  empleado: Empleado = new Empleado();

  constructor(private empleadoServicio: EmpleadoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
    }, error => console.log(error));
  }

  irAListadeEmpleados() {
    this.router.navigate(['/Sistema/empleados']);

  }

  onSubmit() {
    this.empleadoServicio.actualizarEmpleado(this.id, this.empleado).subscribe(dato => {
      this.irAListadeEmpleados();
    }, error => console.log(error));
  }


  actualizarEmpleados(): void {
    const id = this.route.snapshot.params["id"];
    this.empleadoServicio.actualizarEmpleado(id, this.empleado).subscribe(
      data => {
        this.router.navigate(["/Sistema/empleados"]);
      }
    )
  }

}
