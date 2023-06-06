import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  abrirAlerta:boolean = false;
  mostrarEnConsola(nombre:string){
    console.log(nombre);
    this.abrirAlerta=true; //muestre enncosola y cabie de false a true
  }
}
