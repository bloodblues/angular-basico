import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder:7500
    }
  ];

  nuevo:Personaje = {
    nombre: 'Maestro rochi',
    poder:66666
  }

  agregarNuevoPersonaje(argumento: Personaje){

    this.personajes.push( argumento)

  }

}
