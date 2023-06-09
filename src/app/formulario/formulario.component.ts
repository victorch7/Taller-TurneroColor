import { Component } from '@angular/core';
import { Persona } from '../personas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  abrirAlerta:boolean = false;
  mostrarEnConsola(nombre:string, apellido:string, edad:string, fecha:string, telefono:string, email:string){
    console.log(
      
      "Nombre:" + nombre + "\n" +
      "Apellido:" + apellido + "\n" +
      "Edad:" + edad + "\n" +
      "Fecha de nacimiento:" + fecha + "\n" +
      "Telefono:" + telefono+  "\n" +
      "Email:" + email

      );

    this.abrirAlerta=true; //muestre enncosola y cabie de false a true
  }
}
