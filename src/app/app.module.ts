import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//EMPLEADOS
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
//AVIONES
import { ListaAvionesComponent } from './lista-aviones/lista-aviones.component';
import { RegistrarAvionComponent } from './registrar-avion/registrar-avion.component';
import { ActualizarAvionComponent } from './actualizar-avion/actualizar-avion.component';
//PASAJEROS
import { ListaPasajerosComponent } from './lista-pasajeros/lista-pasajeros.component';
import { RegistrarPasajeroComponent } from './registrar-pasajero/registrar-pasajero.component';
import { ActualizarPasajeroComponent } from './actualizar-pasajero/actualizar-pasajero.component';
//RESERVAS
import { ListaReservasComponent } from './lista-reservas/lista-reservas.component';
import { RegistrarReservaComponent } from './registrar-reserva/registrar-reserva.component';
import { ActualizarReservaComponent } from './actualizar-reserva/actualizar-reserva.component';

//BOLETOS
import { ListaBoletosComponent } from './lista-boletos/lista-boletos.component';
//VUELOS
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    ListaAvionesComponent,
    RegistrarAvionComponent,
    ActualizarAvionComponent,
    ListaPasajerosComponent,
  
    ListaReservasComponent,
    RegistrarReservaComponent,
    ActualizarReservaComponent,
    ListaBoletosComponent,
    RegistrarPasajeroComponent,
    ActualizarPasajeroComponent,
    ListaVuelosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
