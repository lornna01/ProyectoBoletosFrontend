import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from './vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  //URL obtiene el listado de todos los vuelos en el backend
  private baseURL = "http://localhost:8080/App/Vuelos";


  constructor(private httpClient: HttpClient) { }

  //OBTENER 
  obtenerListaVuelos(): Observable<Vuelo[]> {
    return this.httpClient.get<Vuelo[]>(`${this.baseURL}/listarVuelos`);
  }
  //GUARDAR
  ingresarVuelo(vuelo: Vuelo): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/guardarVuelo`, vuelo);
  }

  //ACTUALIZAR 
  actualizarVuelo(id: number, vuelo: Vuelo): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/actualizarVuelo/${id}`, vuelo);
  }

  //ELIMINAR
  eliminarVuelo(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/eliminarVuelo/${id}`);
  }
  //BUSCAR
  obtenerVueloPorId(id: number): Observable<Vuelo> {
    return this.httpClient.get<Vuelo>(`${this.baseURL}/${id}`);
  }

}
