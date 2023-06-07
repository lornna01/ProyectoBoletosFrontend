import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/App/Empleados";


  constructor(private httpClient: HttpClient) { }

  //OBTENER EMPLEADOS
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}/listarEmpleado`);
  }
  //GUARDAR EMPLEADOS
  ingresarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/guardarEmpleado`, empleado);
  }

  //ACTUALIZAR EMPLEADO
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/actualizarEmpleado/${id}`, empleado);
  }

  //ELIMINAR EMPLEADO
  eliminarEmpleado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/eliminarEmpleado/${id}`);
  }
  //Metodo para obtener o buscar un empleado
  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }


}
