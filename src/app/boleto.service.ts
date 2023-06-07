import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleto } from './boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  //URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/App/Boletos";


  constructor(private httpClient: HttpClient) { }

  //OBTENER 
  obtenerListaBoletos(): Observable<Boleto[]> {
    return this.httpClient.get<Boleto[]>(`${this.baseURL}/listarBoleto`);
  }
  //GUARDAR
  ingresarBoleto(boleto: Boleto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/guardarBoleto`, boleto);
  }

  //ACTUALIZAR 
  actualizarBoleto(id: number, boleto: Boleto): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/actualizarBoleto/${id}`, boleto);
  }

  //ELIMINAR
  eliminarBoleto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/eliminarBoleto/${id}`);
  }
  //BUSCAR
  obtenerBoletoPorId(id: number): Observable<Boleto> {
    return this.httpClient.get<Boleto>(`${this.baseURL}/${id}`);
  }

}
