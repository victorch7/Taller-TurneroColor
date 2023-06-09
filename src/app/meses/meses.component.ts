import { Component } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent {
  mes?:string; //se camabia a string antes era number
  dia?:String;

}
