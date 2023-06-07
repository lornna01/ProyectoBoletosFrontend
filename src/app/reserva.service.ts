import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  //URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/App/Reservas";


  constructor(private httpClient: HttpClient) { }

  //OBTENER 
  obtenerListaReservas(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.baseURL}/listarReserva`);
  }
  //GUARDAR
  ingresarReserva(reserva: Reserva): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/guardarReserva`, reserva);
  }

  //ACTUALIZAR 
  actualizarReserva(id: number, reserva: Reserva): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/actualizarReserva/${id}`, reserva);
  }

  //ELIMINAR
  eliminarReserva(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/eliminarReserva/${id}`);
  }
  //BUSCAR
  obtenerReservaPorId(id: number): Observable<Reserva> {
    return this.httpClient.get<Reserva>(`${this.baseURL}/${id}`);
  }

}
