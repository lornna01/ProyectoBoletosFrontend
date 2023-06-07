import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from './avion';


@Injectable({
  providedIn: 'root'
})
export class AvionService {

  //URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/App/Aviones";

  constructor(private httpClient: HttpClient) {}

  //OBTENER AVIONES
  obtenerListaAviones(): Observable<Avion[]>{
    return this.httpClient.get<Avion[]>(`${this.baseURL}/listarAviones`);
  }

  //GUARDAR
  ingresarAvion(avion: Avion): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/guardarAvion`, avion);
  }

  //ACTUALIZAR
  actualizarAvion(id: number, avion: Avion): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/actualizarAvion/${id}`, avion);
  }

  //ELIMINAR
  eliminarAvion(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/eliminarAvion/${id}`);

  }

  //BUSCAR
  obtenerAvionPorId(id: number): Observable<Avion>{
    return this.httpClient.get<Avion>(`${this.baseURL}/${id}`);
  }

 
  
  
}
  