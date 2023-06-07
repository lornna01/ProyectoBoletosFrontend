import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';




//ARREGLAR ESTO
const routes: Routes = [
  //EMPLEADOS
  { path: 'Sistema/empleados', component: ListaEmpleadosComponent },
  { path: 'Sistema/empleados/registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  //AVIONES
  { path: 'Sistema/aviones', component: ListaAvionesComponent },
  { path: 'Sistema/aviones/registrar-avion', component: RegistrarAvionComponent },
  { path: 'actualizar-avion/:id', component: ActualizarAvionComponent },
  //PASAJEROS
  { path: 'Sistema/pasajeros', component: ListaPasajerosComponent},
  { path: 'Sistema/pasajeros/registrar-pasajero', component: RegistrarPasajeroComponent},
  { path: 'actualizar-pasajero/:id', component: ActualizarPasajeroComponent},

  //RESERVAS
  { path: 'Sistema/reservas', component: ListaReservasComponent},
  { path: 'Sistema/reservas/registrar-reserva', component: RegistrarReservaComponent},
  {path: 'actualizar-reserva/:id', component: ActualizarReservaComponent},

  //BOLETOS
  { path: 'Sistema/boletos', component: ListaBoletosComponent},
  //VUELOS
  { path: 'Sistema/vuelos', component: ListaVuelosComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 


 }
