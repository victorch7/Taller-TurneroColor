import { Component } from '@angular/core';
import { Persona } from '../personas';

@Component({
  selector: 'app-formulariodos',
  templateUrl: './formulariodos.component.html',
  styleUrls: ['./formulariodos.component.css']
})

export class FormulariodosComponent {

Persona = {
  nombre:'',
  edad:''
}

procesar(){ //datos se envian ana API - comunica con servidores
  console.log(this.Persona);
}


}

