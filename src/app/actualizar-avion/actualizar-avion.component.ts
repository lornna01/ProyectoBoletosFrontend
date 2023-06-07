import { Component, OnInit } from '@angular/core';
import { Avion } from '../avion';
import { AvionService } from '../avion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-avion',
  templateUrl: './actualizar-avion.component.html',
  styleUrls: ['./actualizar-avion.component.css']
})
export class ActualizarAvionComponent implements OnInit {

  id: number;
  avion: Avion = new Avion();

  constructor(private avionServicio: AvionService, private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.avionServicio.obtenerAvionPorId(this.id).subscribe(dato => {
      this.avion = dato;
    }, error => console.log(error));
  }

  irAListadeAviones() {
    this.router.navigate(['/Sistema/aviones']);

  }

  onSubmit() {
    this.avionServicio.actualizarAvion(this.id, this.avion).subscribe(dato => {
      this.irAListadeAviones();
    }, error => console.log(error));
  }


  actualizarAviones(): void {
    const id = this.route.snapshot.params["id"];
    this.avionServicio.actualizarAvion(id, this.avion).subscribe(
      data => {
        this.router.navigate(["/Sistema/aviones"]);
      }
    )
  }

}
