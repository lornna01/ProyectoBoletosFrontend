import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasajero } from './pasajero';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  
  //URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/App/Pasajeros";


  constructor(private httpClient: HttpClient) { }

  //OBTENER 
  obtenerListaPasajeros(): Observable<Pasajero[]> {
    return this.httpClient.get<Pasajero[]>(`${this.baseURL}/listarPasajero`);
  }
  //GUARDAR
  ingresarPasajero(pasajero: Pasajero): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/guardarPasajero`, pasajero);
  }

  //ACTUALIZAR 
  actualizarPasajero(id: number, pasajero: Pasajero): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/actualizarPasajero/${id}`, pasajero);
  }

  //ELIMINAR
  eliminarPasajero(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/eliminarPasajero/${id}`);
  }
  //BUSCAR
  obtenerPasajeroPorId(id: number): Observable<Pasajero> {
    return this.httpClient.get<Pasajero>(`${this.baseURL}/${id}`);
  }

}
