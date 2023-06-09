import { Component } from '@angular/core';
import { Opciones } from '../opciones';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  opciones: Opciones[]=[
    { nombre: "Turnero"},
    { nombre: "Formulario"},
    { nombre: "Meses del año"},
    { nombre: "Botones"}
  ]

}
